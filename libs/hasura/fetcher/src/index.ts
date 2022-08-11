import { logger } from '@governance/logger';
import { isJestRunning } from '@governance/test-utils-jest';

export const endpointUrl = (): string =>
  typeof window !== 'undefined'
    ? (process.env.NEXT_PUBLIC_HASURA_URL as string)
    : (process.env.NEXT_PUBLIC_HASURA_SSR_URL as string);

// // This fetcher is used for fetching data from Hasura GraphQL API with an user authenticated.
export const fetchData = <TData, TVariables>(
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

// This fetcher is used for fetching data from Hasura GraphQL API with admin rights.
// It returns an error if the HASURA_GRAPHQL_ADMIN_SECRET is not set or if it's not called server side
export const fetchDataAdmin = () => {
  return async <TResult, TVariables>(
    doc: string,
    variables: TVariables
  ): Promise<TResult> => {
    // forbid calling on client side and allow if jest is running
    if (typeof window !== 'undefined' && !isJestRunning())
      throw new Error('Admin access is only available on the server');
    if (!process.env.HASURA_GRAPHQL_ADMIN_SECRET)
      throw new Error('Admin secret env is missing');
    const res = await fetch(endpointUrl(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Hasura-Admin-Secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET,
      },
      body: JSON.stringify({
        query: doc,
        variables,
      }),
    });

    const json = await res.json();

    logger.debug('fetchDataAdmin', { json });

    if (json.errors) {
      const { message } = json.errors[0] || 'Error..';
      logger.error(message);
      throw new Error(message);
    }

    return json.data;
  };
};
