// https://codedgeekery.com/blog/hasura-nextauth
// https://next-auth.js.org/tutorials/creating-a-database-adapter
// https://hasura.io/learn/graphql/hasura-authentication/integrations/nextjs-auth/
// implementation ref with prisma https://github.com/nextauthjs/adapters/blob/main/packages/prisma/src/index.ts

import { randomBytes } from "crypto";
import type { Adapter, AdapterUser } from "next-auth/adapters";
import fetch from "node-fetch";
import type { JWT } from "next-auth/jwt";

export const endpointUrl = () =>
  typeof window !== "undefined"
    ? process.env.HASURA_URL
    : process.env.HASURA_SSR_URL;

export const fetchParams = async (accessToken: string) => ({
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

export const hasuraOptions = async (accessToken: string) => ({
  fetchParams: fetchParams(accessToken),
  endpoint: endpointUrl(),
});

export enum Roles {
  user = "user",
  admin = "admin",
  anonymous = "anonymous",
}

export type UserRole = Roles.user;
export type AdminRole = Roles.admin;
export type AnonymousRole = Roles.anonymous;

export type Role = UserRole | AdminRole | AnonymousRole;

export const hasuraClaims = (token: JWT, role: Role) => ({
  "https://hasura.io/jwt/claims": {
    "x-hasura-allowed-roles": [Roles.user, Roles.admin, Roles.anonymous],
    "x-hasura-default-role": Roles.user,
    "x-hasura-role": role,
    "x-hasura-user-id": token.sub,
  },
});
export const hasuraRequest = async ({
  query,
  variables,
  token = null,
  admin = false,
}) => {
  if (process.env.HASURA_URL && process.env.HASURA_GRAPHQL_ADMIN_SECRET) {
    try {
      let headers = {
        "Content-Type": "application/json",
      };
      if (admin) {
        if (typeof window !== "undefined")
          throw new Error("Admin access is only available on the server");
        else
          headers["X-Hasura-Admin-Secret"] =
            process.env.HASURA_GRAPHQL_ADMIN_SECRET;
      } else if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }
      const response = await fetch(endpointUrl() as string, {
        method: "POST",
        body: JSON.stringify({ query, variables }),
        headers: headers,
      });

      const jsonResponse: any = await response.json();
      if (jsonResponse?.errors) {
        const { message } = jsonResponse?.errors[0] || "Error..";
        throw new Error(message);
      }
      return jsonResponse?.data;
    } catch (error) {
      throw error;
    }
  }
  return {};
};

export const HasuraAdapter = (config = {}, options = {}): Adapter => {
  return {
    async createUser(user: AdapterUser) {
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
          },
        },
        admin: true,
      });
      return data?.insert_users_one || null;
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
      return data?.users[0] || null;
    },
    async updateUser(user: AdapterUser) {
      return user;
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
            id: randomBytes(32).toString("hex"),
            ...account,
          },
        },
        admin: true,
      });
      console.log({ linkAccount: data });
      return data?.insert_accounts_one || null;
    },
    async unlinkAccount({ providerAccountId, provider }) {
      return null;
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
            id: randomBytes(32).toString("hex"),
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
};
export default HasuraAdapter;
