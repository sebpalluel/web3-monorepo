import fetch from 'node-fetch';
import type { JWT } from 'next-auth/jwt';

export const endpointUrl = () =>
  typeof window !== 'undefined' ? process.env.HASURA_URL : process.env.HASURA_SSR_URL;

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
  user = 'user',
  admin = 'admin',
  anonymous = 'anonymous',
}

export type UserRole = Roles.user;
export type AdminRole = Roles.admin;
export type AnonymousRole = Roles.anonymous;

export type Role = UserRole | AdminRole | AnonymousRole;

export const hasuraClaims = (token: JWT, role: Role) => ({
  'https://hasura.io/jwt/claims': {
    'x-hasura-allowed-roles': [Roles.user, Roles.admin, Roles.anonymous],
    'x-hasura-default-role': Roles.user,
    'x-hasura-role': role,
    'x-hasura-user-id': token.sub,
  },
});
export const hasuraRequest = async ({
  query = {},
  variables = {},
  token = null,
  admin = false,
}) => {
  if (process.env.HASURA_URL && process.env.HASURA_GRAPHQL_ADMIN_SECRET) {
    const headers: any = {
      'Content-Type': 'application/json',
    };
    if (admin) {
      if (typeof window !== 'undefined')
        throw new Error('Admin access is only available on the server');
      else headers['X-Hasura-Admin-Secret'] = process.env.HASURA_GRAPHQL_ADMIN_SECRET;
    } else if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    const response = await fetch(endpointUrl() as string, {
      method: 'POST',
      body: JSON.stringify({ query, variables }),
      headers: headers,
    });

    const jsonResponse: any = await response.json();
    if (jsonResponse?.errors) {
      const { message } = jsonResponse?.errors[0] || 'Error..';
      throw new Error(message);
    }
    return jsonResponse?.data;
  }
  return {};
};
