import { logger } from '@governance/logger';

export const endpointUrl = (): string =>
  typeof window !== 'undefined'
    ? (process.env.NEXT_PUBLIC_HASURA_URL as string)
    : (process.env.NEXT_PUBLIC_HASURA_SSR_URL as string);

// This fetcher is used for fetching data from Hasura GraphQL API with an user authenticated.
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
export const fetchDataAdmin = <TData, TVariables>(
  query: string,
  variables?: TVariables,
  options?: RequestInit['headers']
): (() => Promise<TData>) => {
  return async () => {
    if (typeof window !== 'undefined')
      throw new Error('Admin access is only available on the server');
    if (!process.env.HASURA_GRAPHQL_ADMIN_SECRET)
      throw new Error('Admin secret env is missing');
    const headers = {
      'Content-Type': 'application/json',
      'x-hasura-admin-secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET,
      ...(options ?? {}),
    };
    const res = await fetch(process.env.NEXT_PUBLIC_HASURA_SSR_URL as string, {
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

export const hasuraRequest = async ({
  query = {},
  variables = {},
  token = null,
  admin = false,
}) => {
  const url = endpointUrl();

  const headers: any = {
    'Content-Type': 'application/json',
  };
  logger.error({
    query,
    variables,
    token,
    admin,
    secret: process.env.HASURA_GRAPHQL_ADMIN_SECRET,
    url,
  });
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({ query, variables }),
    headers: {
      'Content-Type': 'application/json',
      'X-Hasura-Admin-Secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET,
    },
  });

  const jsonResponse: any = await response.json();
  if (jsonResponse?.errors) {
    logger.error(jsonResponse.errors, headers);
    const { message } = jsonResponse?.errors[0] || 'Error..';
    throw new Error(message);
  } else logger.error(jsonResponse, headers);
  return jsonResponse?.data;
};
