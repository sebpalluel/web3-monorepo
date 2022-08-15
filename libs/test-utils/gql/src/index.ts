/* eslint-disable @typescript-eslint/no-var-requires */
import { GraphQLClient } from 'graphql-request';
import { getSdk as userSdk } from '@governance/gql-user';
const jwt = require('jsonwebtoken');

// setup env variables
require('dotenv').config({ path: './tools/test/.env.test' });

// parse the key out of the HASURA_GRAPHQL_JWT_SECRET environment variable
let secret = '';
try {
  secret = JSON.parse(process.env.HASURA_GRAPHQL_JWT_SECRET!).key;
} catch (e) {
  console.error('HASURA_GRAPHQL_JWT_SECRET must be parsable json and have property key');
  process.exit(1);
}

type UserOptions = {
  role?: string;
  user: {
    id: string;
    name: string;
  };
  clientId?: string;
};
// generate a JWT that includes roles, userId, and username
const generateJwt = (options: UserOptions): string =>
  jwt.sign(JSON.stringify(options), secret);

// configure the client
export const userClient = (options: UserOptions): ReturnType<typeof userSdk> => {
  if (!process.env.GRAPHQL_ENDPOINT) {
    throw new Error('GRAPHQL_ENDPOINT is not defined');
  }
  if (!process.env.HASURA_GRAPHQL_ADMIN_SECRET) {
    throw new Error('HASURA_GRAPHQL_ADMIN_SECRET is not defined');
  }
  const { user } = options;
  const role = options.role || 'user';
  const clientId = options.clientId || 'test';
  const jwt = generateJwt({ role, user, clientId });
  const client = new GraphQLClient(process.env.GRAPHQL_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });

  return userSdk(client);
};
