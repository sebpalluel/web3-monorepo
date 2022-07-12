// https://codedgeekery.com/blog/hasura-nextauth
// https://next-auth.js.org/tutorials/creating-a-database-adapter

import fetch from 'node-fetch'
import jwt from 'jsonwebtoken';
import { randomBytes } from "crypto"


export const hasuraRequest = async ({ query, variables, token = null, admin = false }) => {
	if (process.env.HASURA_URL && process.env.HASURA_GRAPHQL_ADMIN_SECRET) {
		try {
			let headers = {
				'Content-Type': 'application/json',
			};
			// token = '25f3a4d8b7a24990794824ecc449c86b3fd74607335344918ad1667fab82f21a%7C57fda82a7566de6a672e2d7bc2c0f8301de9ccb685212d6429203c137444c5ab'
			if (admin) {
				headers['X-Hasura-Admin-Secret'] = process.env.HASURA_GRAPHQL_ADMIN_SECRET;
			} else if (token) {
				headers['Authorization'] = `Bearer ${token}`;
			}
			// console.log({ headers });

			const response = await fetch(process.browser ? process.env.HASURA_URL : process.env.HASURA_SSR_URL, {
				method: 'POST',
				body: JSON.stringify({ query, variables }),
				headers: headers
			})

			const jsonResponse = await response.json()
			console.log({ jsonResponse });
			if (jsonResponse.errors) {
				const { message } = jsonResponse.errors[0] || 'Error..'
				throw new Error(message)
			}
			return jsonResponse.data
		} catch (error) {
			throw error
		}
	}
	return {}
}

export const hasuraClaims = async (id, email) => {
	const jwtSecret = JSON.parse(process.env.AUTH_PRIVATE_KEY || "");
	const token = jwt.sign({
		userId: String(id),
		'https://hasura.io/jwt/claims': {
			'x-hasura-user-id': String(id),
			"x-hasura-role": "user",
			'x-hasura-default-role': 'user',
			'x-hasura-allowed-roles': ['user']
		},
		iat: Date.now() / 1000,
		exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
		sub: id,
	}, jwtSecret.key, {
		algorithm: jwtSecret.type
	})
	return token;
}

export const hasuraDecodeToken = async (token) => {
	const jwtSecret = JSON.parse(process.env.AUTH_PRIVATE_KEY || "");
	const decodedToken = jwt.verify(token, jwtSecret.key, {
		algorithms: jwtSecret.type,
	});
	return decodedToken
}

/** @return { import("next-auth/adapters").Adapter } */
export const HasuraAdapter = (config = {}, options = {}) => {
	return {
		displayName: "HASURA",

		async createUser(user) {
			const data = await hasuraRequest({
				query: `
          mutation createUser($user: users_insert_input!) {
            insert_users_one(object: $user) {
              id
              email,
	      name,
	      image,
            }
          }
        `,
				variables: {
					user: {
						id: randomBytes(32).toString("hex"),
						emailVerified: user.emailVerified?.toISOString() ?? null,
						...user,
					}
				},
				admin: true,
			});
			return data?.insert_users_one || null
		},
		async getUser(id) {
			const data = await hasuraRequest({
				query: `
          query getUser($id: Int!){
            users(where: {id: {_eq: $id}}) {
              	id
              	email
		name,
		image,
            }
          }
        `,
				variables: {
					id
				},
				admin: true,
			});
			return data?.users[0] || null
		},
		async getUserByEmail(email) {
			const data = await hasuraRequest({
				query: `
          query getUser($email: String!){
            users(where: {email: {_eq: $email}}) {
              	id
              	email,
		name,
		image,
            }
          }
        `,
				variables: {
					email,
				},
				admin: true,
			});
			const user = data?.users[0]
			console.log({ userByEmail: user });
			return user || null
		},
		async getUserByAccount({ providerAccountId, provider }) {
			const data = await hasuraRequest({
				query: `
          query getUserByAccount($provider: String!, $providerAccountId: String!){
            users(where: {
                _and: {
                  accounts: {
                      provider: {_eq: $provider}, 
                      providerAccountId: {_eq: $providerAccountId}
                    }
                }
              }){
              id
              email,
	      name,
	      image,
              accounts {
                provider
                providerAccountId
              }
            }
          }
        `,
				variables: {
					provider,
					providerAccountId
				},
				admin: true,
			});

			return data?.users[0] || null
		},
		async updateUser(user) {
			return
		},
		async deleteUser(userId) {
			return
		},
		async linkAccount(account) {
			const data = await hasuraRequest({
				query: `
          mutation linkAccount($account: accounts_insert_input!) {
            insert_accounts_one(object: $account) {
              id
              userId
              provider
              providerAccountId
            }
          }
        `,
				variables: {
					account: {
						id: randomBytes(32).toString("hex"),
						...account,
					}
				},
				admin: true,
			});
			return data?.insert_accounts_one || null
		},
		async unlinkAccount({ providerAccountId, provider }) {
			return
		},
		async createSession({ sessionToken, userId, expires }) {
			const sessionMaxAge = 30 * 24 * 60 * 60

			const data = await hasuraRequest({
				query: `
          mutation createSession($session: sessions_insert_input!) {
            insert_sessions_one(object: $session) {
              id
              userId
              expires
              sessionToken
            }
          }
        `,
				variables: {
					session: {
						id: randomBytes(32).toString("hex"),
						expires: new Date(Date.now() + sessionMaxAge),
						userId,
						sessionToken,
					}
				},
				admin: true,
			});
			return data?.insert_sessions_one || null
		},
		async getSessionAndUser(sessionToken) {
			const data = await hasuraRequest({
				query: `
          query getSessionAndUser(!sessionToken: String!){
            session(where: {
              sessionToken: {_eq: $sessionToken}
            }){
              sessionToken
              expires
              User {
                id,
		name,
		image,
                email;
              }
            }
          }
        `,
				variables: {
					sessionToken,
				},
			});
			console.log({data});
			
			return data?.sessions[0] || null
		},
		async updateSession({ sessionToken }) {
			return
		},
		async deleteSession(sessionToken) {
			return
		},
		async createVerificationToken({ identifier, expires, token }) {
			const data = await hasuraRequest({
				query: `
          mutation createVerificationToken($verificationToken: verificationTokens_insert_input!) {
            insert_verificationTokens_one(object: $verificationToken) {
              	identifier,
		expires,
		token,
            }
          }
        `,
				variables: {
					verificationToken: {
						identifier,
						expires,
						token,
					}
				},
				admin: true,
			});
			return data?.insert_sessions_one || null
		},
		async useVerificationToken({ identifier, token }) {
			const data = await hasuraRequest({
				query: `
          query getVerificationToken($token: String!){
	verificationTokens(where: {token: {_eq: $token}}) {
              	identifier,
		expires,
		token,
            }
          }
        `,
				variables: {
					token,
				},
				admin: true,
			});
			const verifToken = data?.verificationTokens[0]
			console.log({ verifToken });

			if (verifToken)
				await hasuraRequest({
					query: `
					mutation delete_verificationToken($token: String!) {
						delete_verificationTokens(where: {token: {_eq: $token}}) {
						  affected_rows
						}
					      }
					      `,
					variables: {
						token: verifToken.token
					},
					admin: true,
				})
			return verifToken
		},
	}
}
export default HasuraAdapter;