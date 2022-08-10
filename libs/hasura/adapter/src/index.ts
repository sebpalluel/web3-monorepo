import { randomBytes } from 'crypto';
import type { Adapter, AdapterUser } from 'next-auth/adapters';
import { hasuraRequest } from '@governance/hasura-fetcher';
import { UpdateUserDocument, DeleteAccountDocument } from '@governance/gql-admin';
import { logger } from '@governance/logger';

export function adapter(): Adapter {
  return {
    async createUser(data) {
      const user: AdapterUser = {
        ...(data as any),
        id: randomBytes(32).toString('hex'),
      };
      await hasuraRequest({
        query: `
          mutation createUser($user: users_insert_input!) {
            insert_users_one(object: $user) {
              id
              email
	            name
	            image
            }
          }
        `,
        variables: {
          user,
        },
        admin: true,
      });
      return user;
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
          id,
        },
        admin: true,
      });
      return data?.users[0] || null;
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
                password,
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
      const user = data?.users[0];
      return user || null;
    },
    async getUserByAccount({ providerAccountId, provider }) {
      logger.error(providerAccountId, provider);
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
          providerAccountId,
        },
        admin: true,
      });
      logger.error(data);
      return data?.users[0] || null;
    },
    async updateUser(user) {
      const { id, ...data } = user;
      await hasuraRequest({
        query: UpdateUserDocument,
        variables: {
          id,
          user: data,
        },
        admin: true,
      });
      return data?.['user'] as AdapterUser;
    },
    async deleteUser(userId) {
      return null;
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
            id: randomBytes(32).toString('hex'),
            ...account,
          },
        },
        admin: true,
      });
      console.log({ linkAccount: data });
      return data?.insert_accounts_one || null;
    },
    async unlinkAccount({ providerAccountId }) {
      await hasuraRequest({
        query: DeleteAccountDocument,
        variables: {
          id: providerAccountId,
        },
        admin: true,
      });
    },
    async createSession({ sessionToken, userId, expires }) {
      const sessionMaxAge = 30 * 24 * 60 * 60;

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
            id: randomBytes(32).toString('hex'),
            expires: new Date(Date.now() + sessionMaxAge),
            userId,
            sessionToken,
          },
        },
        admin: true,
      });
      return data?.insert_sessions_one || null;
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
      return data?.sessions[0] || null;
    },
    async updateSession({ sessionToken }) {
      return null;
    },
    async deleteSession(sessionToken) {
      return null;
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
          },
        },
        admin: true,
      });
      return data?.insert_sessions_one || null;
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
      const verifToken = data?.verificationTokens[0];
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
            token: verifToken.token,
          },
          admin: true,
        });
      console.log({ verifToken });

      // If token already used/deleted, just return null
      if (verifToken?.expires < new Date()) {
        return null;
      }
      return verifToken;
    },
  };
}
