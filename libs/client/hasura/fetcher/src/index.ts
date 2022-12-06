import { logger } from '@logger';
import { isJestRunning, isServerSide, isDev } from '@utils';
import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';

export const endpointUrl = (): string => {
  if (isJestRunning()) {
    return 'http://localhost:9696/v1/graphql';
  }
  let url = isServerSide()
    ? process.env.HASURA_PROJECT_ENDPOINT
    : process.env.NEXT_PUBLIC_HASURA_PROJECT_ENDPOINT;
  if (!url) url = 'http://localhost:8080/v1/graphql';
  return url;
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
      logger.error(
        '\n\nerror:\n',
        json.errors,
        '\n\nquery:\n',
        query,
        '\n\nvariables\n:',
        variables
      );
      const { message } = json.errors[0] || 'Error..';
      throw new Error(message);
    }

    return json.data;
  };
};

// This fetcher is used for fetching data from Hasura GraphQL API.
// The admin mode is used solely for the admin role, it returns an error if the HASURA_ADMIN_SECRET is not set or if it's not called server side
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
      if (!isServerSide() && !isJestRunning())
        throw new Error('Admin access is only available on the server');
      if (!process.env.HASURA_ADMIN_SECRET)
        throw new Error('Admin secret env is missing');
      headers['X-Hasura-Admin-Secret'] = process.env.HASURA_ADMIN_SECRET;
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
      logger.error(
        '\n\nerror:\n',
        json.errors,
        '\n\nquery:\n',
        doc,
        '\n\nvariables\n:',
        variables
      );
      const { message } = json.errors[0] || 'Error..';
      throw new Error(message);
    }

    return json.data;
  };
};

let latestData = null;

const headers = { 'Content-Type': 'application/json' };

// https://tkdodo.eu/blog/using-web-sockets-with-react-query#consuming-data
// https://github.com/TanStack/query/issues/171#issuecomment-649810136

export const useReactQuerySubscription = async (
  query: string,
  operationName?: string,
  variables?: any
) => {
  const queryClient = useQueryClient();
  useEffect(() => {
    if (isServerSide()) return () => null;
    const ws_url = endpointUrl().replace(
      isDev() ? 'http' : 'https',
      isDev() ? 'ws' : 'wss'
    );
    const ws = new WebSocket(ws_url, 'graphql-ws');
    const init_msg = {
      type: 'connection_init',
      payload: { headers },
    };
    ws.onopen = function (event) {
      ws.send(JSON.stringify(init_msg));
      const msg = {
        id: '1',
        type: 'start',
        payload: { variables, extensions: {}, operationName, query },
      };
      ws.send(JSON.stringify(msg));
    };
    ws.onmessage = function (event) {
      const finalData = JSON.parse(event.data);
      if (finalData.type === 'data') {
        console.log('event: ', event);
        latestData = finalData.payload.data;
        let queryKey: string[] = [''];
        if (operationName)
          queryKey = variables ? [operationName, variables] : [operationName];
        else queryKey = variables ? [query, variables] : [query];
        queryClient.setQueriesData(queryKey, latestData);
        return latestData;
      }
    };
    return () => {
      // // Unsubscribe before exit
      // ws.send(JSON.stringify({ id: '1', type: 'stop' }));
      ws.close();
    };
  }, [query, variables]);
};
