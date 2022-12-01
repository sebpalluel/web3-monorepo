/* eslint-disable @typescript-eslint/no-var-requires */
const jwt = require('jsonwebtoken');
import { getSdk as userSdk } from './generated/test-user';
import type { Users, Sdk } from './generated/test-user';
import { fetchData } from '@client/hasura/fetcher';

// setup env variables
require('dotenv').config({ path: './tools/test/.env.test.jest' });

export const users = {
  seb_google: {
    email: 'sebpalluel@gmail.com',
    firstName: null,
    id: '20c0bc91e1254445d459fc6ac97206f6bb9223e71c764c49a778f8b84d3fc57f',
    image:
      'https://lh3.googleusercontent.com/a-/AFdZucpuViPxV1AhiHmm1CalmByGnHAJemRH6MoCaePMEf0=s96-c',
    lastName: null,
    name: 'Sébastien Palluel',
    emailVerified: null,
  },
  alpha_admin: {
    email: 'alpha_admin@test.io',
    firstName: null,
    id: '4c2aa03a7dcb06ab7ac2ba0783d2e466a525e1e5794a42b2a0fa9f61fa7a2965',
    image: null,
    lastName: null,
    name: 'Alpha Admin',
    emailVerified: null,
  },
  beta_admin: {
    email: 'beta_admin@test.io',
    firstName: null,
    id: '1d6dead4e698ddfd4a92cd19afd075611feaedfd149edd7462b80f718e3b2183',
    image: null,
    lastName: null,
    name: 'Beta Admin',
    emailVerified: null,
  },
};

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
    // private key provided on docker-compose for test
    '3EK6FD+o0+c7tzBNVfjpMkNDi2yARAAKzQlk8O2IKoxQu4nF7EdAh8s3TwpHwrdWT6R'
  );

// configure the client
export const sdkClient = (options: UserOptions): Sdk => {
  // if we do not provide allowedRoles for the client we assume that the defaultRole is an allowed role
  if ('defaultRole' in options && !options.allowedRoles) {
    options.allowedRoles = [options.defaultRole];
  }
  const jwt = generateJwt(options);
  return userSdk(fetchData({ jwt }));
};

export const alphaAdminClient = (): Sdk & { me: Users } => {
  return {
    ...sdkClient({
      defaultRole: 'user',
      userId: users.alpha_admin.id,
      username: users.alpha_admin.name,
    }),
    me: users.alpha_admin,
  };
};

export const betaAdminClient = (): Sdk & { me: Users } => {
  return {
    ...sdkClient({
      defaultRole: 'user',
      userId: users.beta_admin.id,
      username: users.beta_admin.name,
    }),
    me: users.beta_admin,
  };
};

export const sebGoogleClient = (): Sdk & { me: Users } => {
  return {
    ...sdkClient({
      defaultRole: 'user',
      userId: users.seb_google.id,
      username: users.seb_google.name,
    }),
    me: users.seb_google,
  };
};
