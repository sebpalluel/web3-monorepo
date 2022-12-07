import * as jsonwebtoken from 'jsonwebtoken';
import { NextAuthOptions, User, Account, Profile } from 'next-auth';
import type { JWT, JWTOptions } from 'next-auth/jwt';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import KeycloakProvider from 'next-auth/providers/keycloak';

import { adapter } from '@client/hasura/adapter';
import { DidProvider } from '@client/did/provider';
import { Roles } from '@client/hasura/utils';
import { fetchJSON, isProd } from '@utils';
import { logger } from '@logger';
import { Provider } from 'next-auth/providers';
import { getNextAuthURL } from '@client/next-auth/common';

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options

const refreshAccessToken = async (token: JWT) => {
  try {
    logger.debug('refreshing access token', { token });
    if (token.type === 'credentials') {
      return token;
      // const url = `${getNextAuthURL()}/api/user/refresh-access-token`
      // const res = await fetch(url, {
      //     method: 'POST',
      //     credentials: 'include',
      //     headers: { 'x-refetch-token': String(token.refreshToken) }
      // })

      // const data = await res.json()
      // if (!res.ok) throw data

      // return {
      //     ...token,
      //     accessToken: data.accessToken?.token,
      //     refreshToken: data.refreshToken?.token ?? token.refreshToken,
      //     exp: (data.accessToken?.expirationDate || 0) / 1000
      // }
    } else {
      if (token.provider === 'google') {
        const url =
          'https://oauth2.googleapis.com/token?' +
          new URLSearchParams({
            client_id: process.env.GOOGLE_CLIENT_ID as string,
            client_secret: process.env.GOOGLE_CLIENT_SECRET as string,
            grant_type: 'refresh_token',
            refresh_token: token.refreshToken as string,
          });
        const response = await fetch(url, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          method: 'POST',
        });
        const refreshedTokens = await response.json();
        if (!response.ok) {
          throw refreshedTokens;
        }
        return {
          ...token,
          accessToken: refreshedTokens.access_token,
          accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
          refreshToken: refreshedTokens.refresh_token ?? token.refreshToken, // Fall back to old refresh token
        };
      }
      return token;
    }
  } catch (error) {
    return { ...token, error: 'RefreshAccessTokenError' };
  }
};

export const jwtOptions: JWTOptions = {
  secret: process.env.NEXTAUTH_SECRET as string,
  maxAge: parseInt(process.env.TOKEN_LIFE_TIME as string) || 30 * 24 * 60 * 60, // 30 days
  encode: async ({ secret, token: payload }) =>
    jsonwebtoken.sign(payload!, secret, {
      algorithm: 'RS256',
    }),
  decode: async ({ secret, token }) => {
    const decodedToken = jsonwebtoken.verify(token!, secret, {
      algorithms: ['RS256'],
    });
    // run some checks on the returned payload, perhaps you expect some specific values

    // if its all good, return it, or perhaps just return a boolean
    return decodedToken as JWT;
  },
};

const GOOGLE_AUTHORIZATION_URL =
  'https://accounts.google.com/o/oauth2/v2/auth?' +
  new URLSearchParams({
    prompt: 'consent',
    access_type: 'offline',
    response_type: 'code',
  });

const providers: Array<Provider> = [
  CredentialsProvider({
    // The name to display on the sign in form (e.g. 'Sign in with...')
    id: 'credentials',
    name: 'credentials',
    // The credentials is used to generate a suitable form on the sign in page.
    // You can specify whatever fields you are expecting to be submitted.
    // e.g. domain, username, password, 2FA token, etc.
    // You can pass any HTML attribute to the <input> tag through the object.
    credentials: {
      username: {
        label: 'Username',
        type: 'text',
        placeholder: 'myemail@domain.com',
      },
      password: { label: 'Password', type: 'password' },
    },
    authorize: async (credentials) => {
      try {
        const user = await fetchJSON(`${getNextAuthURL()}/api/user/check-credentials`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            accept: 'application/json',
          },
          body: Object.entries({
            username: credentials?.username,
            password: credentials?.password,
          })
            .map((e) => e.join('='))
            .join('&'),
        });
        logger.debug(user);
        if (user) {
          return user;
        } else {
          return null;
        }
      } catch (e) {
        logger.error(e);
        return null;
      }
    },
  }),
];

if (process.env.IDPKIT_CLIENT_ID && process.env.IDPKIT_CLIENT_SECRET) {
  providers.push(
    DidProvider({
      didProviderURL: process.env.IDPKIT_PROVIDER_URL as string,
      clientId: process.env.IDPKIT_CLIENT_ID as string,
      clientSecret: process.env.IDPKIT_CLIENT_SECRET as string,
    })
  );
}

if (process.env.GITHUB_ID && process.env.GITHUB_SECRET)
  providers.push(
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    })
  );
if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET)
  providers.push(
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: GOOGLE_AUTHORIZATION_URL,
    })
  );

if (process.env.KEYCLOAK_ID && process.env.KEYCLOAK_SECRET)
  // available options https://github.com/nextauthjs/next-auth/blob/main/packages/next-auth/src/providers/keycloak.ts
  providers.push(
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_ID,
      clientSecret: process.env.KEYCLOAK_SECRET,
      issuer: process.env.KEYCLOAK_ISSUER,
    })
  );

// Authorize cookie for hasura app https://github.com/nextauthjs/next-auth/issues/405#issuecomment-737593528
const useSecureCookies = getNextAuthURL().startsWith('https://');
const cookiePrefix = useSecureCookies ? '__Secure-' : '';
const hostName = new URL(getNextAuthURL()).hostname;

export const authOptions: NextAuthOptions = {
  cookies: {
    sessionToken: {
      name: `${cookiePrefix}next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: useSecureCookies,
        domain: hostName === 'localhost' ? hostName : '.' + hostName,
      },
    },
  },
  debug: !isProd(),
  // https://next-auth.js.org/configuration/providers/oauth
  providers,
  adapter: adapter(),
  pages: {
    signIn: '/auth/signin',
    // signOut: '/auth/signout',
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  theme: {
    colorScheme: 'auto',
  },
  session: {
    strategy: 'jwt',
    maxAge: parseInt(process.env.TOKEN_LIFE_TIME as string) || 30 * 24 * 60 * 60, // 30 days
    // updateAge: 24 * 60 * 60, // 24 hours
  },
  jwt: jwtOptions,
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    // Add hasura data needed for claims_map + accessToken
    async jwt(args) {
      const {
        token,
        user,
        account,
        profile,
        isNewUser,
      }: {
        token: JWT;
        user?: User;
        profile?: Profile;
        account?: Account | null;
        isNewUser?: boolean;
      } = args;
      // First time user sign in
      if (user && account) {
        logger.debug('jwt user sign in: ', {
          token,
          user,
          account,
          profile,
          isNewUser,
        });
        return {
          accessToken: account.access_token,
          accessTokenExpires: Date.now() + (account?.expires_at as number) * 1000,
          refreshToken: account.refresh_token,
          user: { ...user, name: profile?.name },
          provider: account.provider,
          providerType: account.type,
          role: Roles.user,
        };
      } else {
        Object.assign(token, {
          role: token.user ? Roles.user : Roles.anonymous,
        });
      }
      // Return previous token if the access token has not expired yet
      if (Date.now() < (token.accessTokenExpires as number)) {
        return token;
      }

      // Access token has expired, try to update it
      return refreshAccessToken(token);
    },
    // Add user ID to the session
    async session({ session, token }) {
      session.user = token.user as User;
      session.error = token.error as string;
      return session;
    },
  },
};
