import * as jsonwebtoken from 'jsonwebtoken';
import { NextAuthOptions, User, Account, Profile } from 'next-auth';
import type { JWT, JWTOptions } from 'next-auth/jwt';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { isAddress } from 'ethers/lib/utils';

import { adapter } from '@client/hasura/adapter';
import { DidProvider } from '@client/did/provider';
import { SiweProvider } from '@client/siwe/provider';
import { Roles } from '@client/hasura/utils';
import { fetchJSON, isProd } from '@utils';
import { logger } from '@logger';
import { Provider } from 'next-auth/providers';
import { getNextAuthURL } from '@client/next-auth/common';

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options

const refreshAccessToken = async (token: JWT) => {
  logger.debug('refreshing access token', { token });
  return token;
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

export const providers: Array<Provider> = [SiweProvider()];

if (process.env.IDPKIT_CLIENT_ID && process.env.IDPKIT_CLIENT_SECRET) {
  providers.push(
    DidProvider({
      didProviderURL: process.env.IDPKIT_PROVIDER_URL as string,
      clientId: process.env.IDPKIT_CLIENT_ID as string,
      clientSecret: process.env.IDPKIT_CLIENT_SECRET as string,
    })
  );
}

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
        // authorize cookie for subdomain, inc. hasura app (strip www. from hostName)
        domain:
          hostName === 'localhost' ? hostName : '.' + hostName.replace(/^www\./, ''),
      },
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: parseInt(process.env.TOKEN_LIFE_TIME as string) || 30 * 24 * 60 * 60, // 30 days
  },
  debug: !isProd(),
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
    async session({ session, token }) {
      // needed for hasura claims_map
      session.user = token.user as User;
      // used to detect if provider with same email exists
      session.error = token.error as string;
      // handle when user is logged in with siwe
      if (isAddress(token.sub as string)) {
        session.address = token.sub as string;
        session.user.name = token.sub;
      }
      return session;
    },
  },
};
