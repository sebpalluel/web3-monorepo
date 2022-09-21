import { logger } from '@boilerplate/logger';
import { isJestRunning } from '@boilerplate/test-utils-common';

export const endpointUrl = (): string => {
  if (isJestRunning()) {
    return 'http://localhost:9696/v1/graphql';
  }
  return typeof window !== 'undefined'
    ? (process.env.NEXT_PUBLIC_HASURA_URL as string)
    : (process.env.NEXT_PUBLIC_HASURA_SSR_URL as string);
};

// This fetcher is used for fetching data for react query from Hasura GraphQL API on the client side.
export const fetchDataReactQuery = <TData, TVariables>(
  query: string,
  variables?: TVariables,
  options?: RequestInit['headers']
): (() => Promise<TData>) => {
  return async () => {
    const headers = {
      'Content-Type': 'application/json',
      ...(options ?? {}),
    };
    const url = endpointUrl();
    const res = await fetch(url, {
      method: 'POST',
      credentials: 'include',
      headers: headers as HeadersInit,
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0] || 'Error..';
      throw new Error(message);
    }

    return json.data;
  };
};

// This fetcher is used for fetching data from Hasura GraphQL API.
// The admin mode is used solely for the admin role, it returns an error if the HASURA_GRAPHQL_ADMIN_SECRET is not set or if it's not called server side
// Otherwise it include the auth cookie or get the jwt for testing purposes
type Opts = {
  admin?: boolean;
  jwt?: string;
};
export const fetchData = (opts: Opts = { admin: false, jwt: '' }) => {
  return async <TResult, TVariables>(
    doc: string,
    variables: TVariables
  ): Promise<TResult> => {
    const { admin, jwt } = opts;
    const headers: RequestInit['headers'] = {
      'Content-Type': 'application/json',
    };
    if (admin) {
      // forbid calling on client side and allow if jest is running
      if (typeof window !== 'undefined' && !isJestRunning())
        throw new Error('Admin access is only available on the server');
      if (!process.env.HASURA_GRAPHQL_ADMIN_SECRET)
        throw new Error('Admin secret env is missing');
      headers['X-Hasura-Admin-Secret'] = process.env.HASURA_GRAPHQL_ADMIN_SECRET;
    }
    // on jest we use the jwt because the cookie is not available on the client side
    else if (isJestRunning()) {
      headers['Authorization'] = `Bearer ${jwt}`;
    }
    const res = await fetch(endpointUrl(), {
      method: 'POST',
      headers,
      credentials: 'include',
      body: JSON.stringify({
        query: doc,
        variables,
      }),
    });
    const json = await res.json();
    if (json.errors) {
      const { message } = json.errors[0] || 'Error..';
      logger.error(message);
      throw new Error(message);
    }

    return json.data;
  };
};
