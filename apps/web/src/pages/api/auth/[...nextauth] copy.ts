import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import { HasuraAdapter } from "../../../lib/hasuraAdapter"
import CredentialsProvider from "next-auth/providers/credentials"
import jwt from "jsonwebtoken";
import { toASCII } from "punycode";

// https://github.com/nextauthjs/next-auth/discussions/1350#discussioncomment-2145362
// https://github.com/hasura/jwt-guide/blob/adfa7e19a49861fe5f7ddd8c1a0b73074d4348c8/lib/apollo-token-refresh-link.ts
// https://next-auth.js.org/tutorials/refresh-token-rotation

const GOOGLE_AUTHORIZATION_URL =
  "https://accounts.google.com/o/oauth2/v2/auth?" +
  new URLSearchParams({
    prompt: "consent",
    access_type: "offline",
    response_type: "code",
  })


/**
* Takes a token, and returns a new token with updated
* `accessToken` and `accessTokenExpires`. If an error occurs,
* returns the old token and an error property
*/
// https://github.com/nextauthjs/next-auth-refresh-token-example/blob/main/pages/api/auth/%5B...nextauth%5D.js
async function refreshAccessToken(token) {
  try {
    0
    /* TODO, method for other credentials provide
     const res = await fetch(`${process.env.ACTION_BASE_URL}/api/actions/refresh-jwt`, {
      : token.refresh,
    })
    */
    const url =
      "https://oauth2.googleapis.com/token?" +
      new URLSearchParams({
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        grant_type: "refresh_token",
        refresh_token: token.refreshToken,
      })

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
    })

    const refreshedTokens = await response.json()
    console.log({ refreshedTokens });


    if (!response.ok) {
      throw refreshedTokens
    }

    return {
      ...token,
      accessToken: refreshedTokens.access_token,
      accessTokenExpires: Date.now() + refreshedTokens.expires_at * 1000,
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken, // Fall back to old refresh token
    }
  } catch (error) {
    console.log(error)

    return {
      ...token,
      error: "RefreshAccessTokenError",
    }
  }
}

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // https://next-auth.js.org/providers/google
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: GOOGLE_AUTHORIZATION_URL,
      checks: "both",
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      checks: "both",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        const res = await fetch(process.env.AUTH_API_ENDPOINT, {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        })
        const user = await res.json()

        // If no error and we have user data, return it
        if (res.ok && user) {
          return user
        }
        // Return null if user data could not be retrieved
        return null
      }
    })
    // EmailProvider({
    //   // https://next-auth.js.org/configuration/providers/email
    //   // https://next-auth.js.org/providers/email
    //   server: {
    //     host: process.env.EMAIL_SERVER_HOST,
    //     port: process.env.EMAIL_SERVER_PORT,
    //     auth: {
    //       user: process.env.EMAIL_SERVER_USER,
    //       pass: process.env.EMAIL_SERVER_PASSWORD
    //     }
    //   },
    //   from: process.env.EMAIL_FROM,
    //   // maxAge: 24 * 60 * 60, // How long email links are valid for (default 24h)
    // }),
  ],
  // https://codedgeekery.com/blog/hasura-nextauth
  adapter: HasuraAdapter(),
  // Database optional. MySQL, Maria DB, Postgres and MongoDB are supported.
  // https://next-auth.js.org/configuration/databases
  //
  // Notes:
  // * You must to install an appropriate node_module for your database
  // * The Email provider requires a database (OAuth providers do not)
  database: process.env.DATABASE_URL,

  // adapter: HasuraAdapter({
  //   endpoint: process.env.HASURA_URL!,
  //   adminSecret: process.env.HASURA_GRAPHQL_ADMIN_SECRET!,
  // }),
  secret: process.env.NEXTAUTH_SECRET,
  theme: {
    colorScheme: "auto",
  },
  session: {
    // Use JSON Web Tokens for session instead of database sessions.
    // This option can be used with or without a database for users/accounts.
    // Note: `jwt` is automatically set to `true` if no database is specified.
    jwt: true,

    // Seconds - How long until an idle session expires and is no longer valid.
    // maxAge: 30 * 24 * 60 * 60, // 30 days

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    // updateAge: 24 * 60 * 60, // 24 hours
  },
  jwt: {
    // A secret to use for key generation (you should set this explicitly)
    secret: process.env.NEXTAUTH_SECRET,
    // Set to true to use encryption (default: false)
    // encryption: true,
    // You can define your own encode/decode functions for signing and encryption
    // if you want to override the default behaviour.
    encode: async (args) => {
      const { secret, token } = args
      let name: string = '';
      let email: string = '';
      let id: string = '';
      switch (token.provider) {
        case "google":
          name = token.name
          email = token.email
          id = token.id.toString()
          break;
        case 'credentials':
          break;
      }
      const jwtClaims = {
        "sub": id,
        "name": name,
        "email": email,
        "iat": Date.now() / 1000,
        "exp": Math.floor(Date.now() / 1000) + (24 * 60 * 60),
        "https://hasura.io/jwt/claims": {
          "x-hasura-allowed-roles": ["user"],
          "x-hasura-default-role": "user",
          "x-hasura-role": "user",
          "x-hasura-user-id": id,
        },
        ...token
      };
      const encodedToken = jwt.sign(jwtClaims, secret, { algorithm: 'HS256' });
      return encodedToken;
    },
    decode: async (args) => {
      const { secret, token } = args
      const decodedToken = jwt.verify(token, secret, { algorithms: ['HS256'] });
      return decodedToken as JWT;
    },
  },

  // You can define custom pages to override the built-in pages.
  // The routes shown here are the default URLs that will be used when a custom
  // pages is not specified for that route.
  // https://next-auth.js.org/configuration/pages
  pages: {
    // signIn: '/api/auth/signin',  // Displays signin buttons
    // signOut: '/api/auth/signout', // Displays form with sign out button
    // error: '/api/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/api/auth/verify-request', // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in
  },

  // Callbacks are asynchronous functions you can use to control what happens
  // when an action is performed.
  // https://next-auth.js.org/configuration/callbacks
  callbacks: {
    // async signIn(user, account, profile) { return true },
    // async redirect(url, baseUrl) { return baseUrl },
    async session({ session, token }) {
      /* TODO method for credential provider
      const encodedToken = jwt.sign(token, process.env.NEXTAUTH_SECRET, { algorithm: 'HS256' });
      session.id = token.id;
      session.token = encodedToken;
      return Promise.resolve(session);
      */
      // console.log({ session, token });

      // session.accessToken = token.accessToken
      // session.error = token.error

      // return session
      console.log({ session, token });
      const encodedToken = jwt.sign(token, process.env.NEXTAUTH_SECRET, { algorithm: 'HS256' });
      session.id = token.id;
      session.token = encodedToken;
      return Promise.resolve(session);
    },
    async jwt(args) {
      const { token, user, account } = args
      // Initial sign in
      if (account && user) {
        return {
          id: user.id,
          accessToken: account.access_token,
          accessTokenExpires: Date.now() + account.expires_at * 1000,
          refreshToken: account.refresh_token,
          user,
          provider: account.provider,
          ...token,
          ...account,
          ...user
        }
      }
      // Return previous token if the access token has not expired yet
      if (Date.now() < token.accessTokenExpires) {
        return token
      }

      // Access token has expired, try to update it
      return refreshAccessToken(token)
    },
  },

  // Events are useful for logging
  // https://next-auth.js.org/configuration/events
  events: {},

  // Enable debug messages in the console if you are having problems
  debug: true,
});
