/* eslint-disable @typescript-eslint/no-var-requires */
import { GraphQLClient } from 'graphql-request';
import { users } from '../../../../tools/test/data/users';
const jwt = require('jsonwebtoken');
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { getSdk as userSdk, Users } from '@governance/gql-user';

// setup env variables
require('dotenv').config({ path: './tools/test/.env.test' });

type UserOptions = {
  allowedRoles?: string[];
  defaultRole: string;
  userId: string;
  username: string;
};

// generate a JWT that includes roles, userId, and username
const generateJwt = (options: UserOptions): string =>
  jwt.sign(
    JSON.stringify({
      roles: options.allowedRoles,
      userId: options.userId,
      username: options.username,
    }),
    '3EK6FD+o0+c7tzBNVfjpMkNDi2yARAAKzQlk8O2IKoxQu4nF7EdAh8s3TwpHwrdWT6R'
  );

// configure the client
export const sdkClient = (options: UserOptions): ReturnType<typeof userSdk> => {
  // if we do not provide allowedRoles for the client we assume that the defaultRole is an allowed role
  if ('defaultRole' in options && !options.allowedRoles) {
    options.allowedRoles = [options.defaultRole];
  }
  const jwt = generateJwt(options);
  const client = new GraphQLClient('http://localhost:9696/v1/graphql', {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
  return userSdk(client);
};

export const alphaAdminClient = (): ReturnType<typeof userSdk> & { me: Users } => {
  return {
    ...sdkClient({
      defaultRole: 'user',
      userId: users.alpha_admin.id,
      username: users.alpha_admin.name,
    }),
    me: users.alpha_admin,
  };
};

export const betaAdminClient = (): ReturnType<typeof userSdk> & { me: Users } => {
  return {
    ...sdkClient({
      defaultRole: 'user',
      userId: users.beta_admin.id,
      username: users.beta_admin.name,
    }),
    me: users.beta_admin,
  };
};

export const sebGoogleClient = (): ReturnType<typeof userSdk> & { me: Users } => {
  return {
    ...sdkClient({
      defaultRole: 'user',
      userId: users.seb_google.id,
      username: users.seb_google.name,
    }),
    me: users.seb_google,
  };
};
