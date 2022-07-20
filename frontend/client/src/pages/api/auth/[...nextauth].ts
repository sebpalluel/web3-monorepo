import * as jsonwebtoken from 'jsonwebtoken'
import NextAuth from 'next-auth'
import type { Adapter } from 'next-auth/adapters'
import type { JWT } from 'next-auth/jwt'
import EmailProvider from 'next-auth/providers/email'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'

import { HasuraAdapter, hasuraRequest } from '../../../lib/hasuraAdapter'

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
// const options: NextAuthOptions = {
export default NextAuth({
    debug: true,
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
        }),
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
                    placeholder: 'jsmith'
                },
                password: { label: 'Password', type: 'password' }
            },
            authorize: async (credentials, req) => {
                const user = await fetch(
                    `${process.env.NEXTAUTH_URL}/api/user/check-credentials`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            accept: 'application/json'
                        },
                        body: Object.entries(credentials)
                            .map((e) => e.join('='))
                            .join('&')
                    }
                )
                    .then((res) => res.json())
                    .catch((err) => {
                        return null
                    })

                if (user) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],
    adapter: HasuraAdapter() as Adapter,
    pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout'
        // error: '/auth/error', // Error code passed in query string as ?error=
        // verifyRequest: '/auth/verify-request', // (used for check email message)
        // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
    },
    theme: {
        colorScheme: 'auto'
    },
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60 // 30 days
        // updateAge: 24 * 60 * 60, // 24 hours
    },
    jwt: {
        // maxAge: 60 * 60 * 24 * 30,
        encode: ({ secret, token }) => {
            return jsonwebtoken.sign(token!, secret, {
                algorithm: 'HS256'
            })
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
        async jwt({ token, user, account, profile, isNewUser }) {
            console.log({ token, user, account, profile, isNewUser })
            // Persist the OAuth or credential access_token to the token right after signin
            if (account) token.accessToken = account.access_token
            return {
                ...token,
                // accessToken,
                'https://hasura.io/jwt/claims': {
                    'x-hasura-allowed-roles': ['user', 'admin', 'anonymous'],
                    'x-hasura-default-role': 'user',
                    'x-hasura-role': 'user',
                    'x-hasura-user-id': token.sub
                }
            }
        },
        // Add user ID and accessToken to the session
        async session({ session, token }) {
            if (session?.user) {
                session.user.id = token.sub!
                const accessToken: string | unknown = token?.accessToken
                session.user.accessToken = accessToken
            }
            session.accessToken = token?.accessToken
            console.log({ session, token })

            return session
        }
    }
})