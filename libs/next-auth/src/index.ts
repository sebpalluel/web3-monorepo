import * as jsonwebtoken from 'jsonwebtoken';
import { NextAuthOptions, User, Account, Profile } from 'next-auth';
import type { JWT, JWTOptions, getToken } from 'next-auth/jwt';
// import EmailProvider from 'next-auth/providers/email'
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

import { adapter, hasuraClaims, Roles } from '@governance/hasura';
import fetchJSON from '@governance/utils';
import { logger } from '@governance/logger';

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options

const refreshAccessToken = async (token: JWT) => {
  try {
    logger.debug('refreshing access token', { token });
    if (token.type === 'credentials') {
      return token;
      // const url = `${process.env.NEXTAUTH_URL}/api/user/refresh-access-token`
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

        logger.debug('refreshed tokens', { refreshedTokens });

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

  encode: async ({ secret, token: payload }) => {
    return jsonwebtoken.sign(payload!, secret, {
      algorithm: 'HS256',
    });
  },
  decode: async ({ secret, token }) => {
    const decodedToken = jsonwebtoken.verify(token!, secret, {
      algorithms: ['HS256'],
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

export const authOptions: NextAuthOptions = {
  debug: true,
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: GOOGLE_AUTHORIZATION_URL,
    }),
    // https://next-auth.js.org/configuration/providers/email
    // EmailProvider({
    //     server: {
    //         host: process.env.EMAIL_SERVER_HOST,
    //         port: process.env.EMAIL_SERVER_PORT,
    //         auth: {
    //             user: process.env.EMAIL_SERVER_USER,
    //             pass: process.env.EMAIL_SERVER_PASSWORD
    //         }
    //     },
    //     from: process.env.EMAIL_FROM
    // }),
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
          placeholder: 'jsmith',
        },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        try {
          const user = await fetchJSON(
            `${process.env.NEXTAUTH_URL}/api/user/check-credentials`,
            {
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
            }
          );
          if (user) {
            return user;
          } else {
            return null;
          }
        } catch (e) {
          return null;
        }
      },
    }),
  ],
  adapter: adapter(),
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
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
    // Add hasura claims and accessToken
    async jwt(args) {
      const {
        token,
        user,
        profile,
        isNewUser,
      }: {
        token: JWT;
        user?: User;
        profile?: Profile;
        isNewUser?: boolean | undefined;
      } = args;
      const { account }: { account?: Account } = args;
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
          user,
          provider: account.provider,
          providerType: account.type,
          ...hasuraClaims(token, Roles.user),
        };
      } else {
        Object.assign(
          token,
          hasuraClaims(token, token.user ? Roles.user : Roles.anonymous)
        );
      }
      logger.debug('jwt: ', token);

      // Return previous token if the access token has not expired yet
      if (Date.now() < (token.accessTokenExpires as number)) {
        return token;
      }

      // Access token has expired, try to update it
      return refreshAccessToken(token);
    },
    // Add user ID and accessToken to the session
    async session({ session, token }) {
      session.user = token.user as User;
      session.accessToken = token.accessToken;
      session.error = token.error;
      return session;
    },
  },
};
