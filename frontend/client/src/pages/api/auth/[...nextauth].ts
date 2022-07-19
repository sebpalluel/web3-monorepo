import * as jsonwebtoken from 'jsonwebtoken'
import NextAuth from 'next-auth'
import type { Adapter } from 'next-auth/adapters'
import type { JWT } from 'next-auth/jwt'
import EmailProvider from 'next-auth/providers/email'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
// import CredentialsProvider from 'next-auth/providers/credentials'

import { HasuraAdapter, hasuraRequest } from '../../../lib/hasuraAdapter'

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
    // https://next-auth.js.org/configuration/providers/oauth
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ''
        }),
        // https://next-auth.js.org/configuration/providers/email
        EmailProvider({
            server: {
                host: process.env.EMAIL_SERVER_HOST,
                port: process.env.EMAIL_SERVER_PORT,
                auth: {
                    user: process.env.EMAIL_SERVER_USER,
                    pass: process.env.EMAIL_SERVER_PASSWORD
                }
            },
            from: process.env.EMAIL_FROM
        })
        // CredentialsProvider({
        //   // You can specify whatever fields you are expecting to be submitted.
        //   // e.g. domain, username, password, 2FA token, etc.
        //   // You can pass any HTML attribute to the <input> tag through the object.
        //   credentials: {
        //     email: { label: "Email", type: "email" },
        //     password: { label: "Password", type: "password" }
        //   },
        //   async authorize(credentials, req) {
        //     console.log({credentials, req});

        //     // You need to provide your own logic here that takes the credentials
        //     // submitted and returns either a object representing a user or value
        //     // that is false/null if the credentials are invalid.
        //     // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        //     // You can also use the `req` object to obtain additional parameters
        //     // (i.e., the request IP address)
        //     const res = hasuraRequest({
        // 		query: `
        //       query getUser($id: Int!){
        //         users(where: {id: {_eq: $id}}) {
        //           id
        //           email
        //         }
        //       }
        //     `,
        // 		variables: {
        // 			id
        // 		},
        // 		admin: true,
        // 	})
        //     const user = await res.json()

        //     // If no error and we have user data, return it
        //     if (res.ok && user) {
        //       return user
        //     }
        //     // Return null if user data could not be retrieved
        //     return null
        //   }
        // })
    ],
    adapter: HasuraAdapter() as Adapter,
    pages: {
        // signIn: '/auth/signin',
        // signOut: '/auth/signout',
        // error: '/auth/error', // Error code passed in query string as ?error=
        // verifyRequest: '/auth/verify-request', // (used for check email message)
        // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
    },
    theme: {
        colorScheme: 'auto'
    },
    session: {
        strategy: 'jwt',
        jwt: true
        // maxAge: 30 * 24 * 60 * 60, // 30 days
        // updateAge: 24 * 60 * 60, // 24 hours
    },
    jwt: {
        // maxAge: 60 * 60 * 24 * 30,
        encode: ({ secret, token }) => {
            const encodedToken = jsonwebtoken.sign(token!, secret, {
                algorithm: 'HS256'
            })
            return encodedToken
        },
        decode: async ({ secret, token }) => {
            const decodedToken = jsonwebtoken.verify(token!, secret, {
                algorithms: ['HS256']
            })
            return decodedToken as JWT
        }
    },
    callbacks: {
        // Add hasura claims and accessToken
        async jwt({ token, user }) {
            const accessToken: string | unknown = user?.accessToken
            return {
                ...token,
                accessToken,
                'https://hasura.io/jwt/claims': {
                    'x-hasura-allowed-roles': ['user', 'admin', 'anonymous'],
                    'x-hasura-default-role': 'user',
                    'x-hasura-role': 'user',
                    'x-hasura-user-id': token.sub
                }
            }
        },
        // Add user ID to the session add accessToken
        session: async ({ session, token }) => {
            if (session?.user) {
                session.user.id = token.sub!
            }
            const accessToken: string | unknown = token?.accessToken
            return { ...session, accessToken }
        }
    }
})
