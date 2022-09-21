import type { NextApiRequest, NextApiResponse } from 'next';
import {
  withMiddlewares,
  withErrorHandling,
  withMethodsGuard,
} from '../../../lib/middlewares';
import { adminSdk } from '@boilerplate/gql-admin';
import cryptojs from 'crypto-js';
import { v4 as uuidv4 } from 'uuid';
import { ApiError } from 'next/dist/server/api-utils';
import type { Password } from '../../../lib/types/crypto';

// https://cryptosense.com/blog/parameter-choice-for-pbkdf2
const hashPasswordWithSalt = (password: string): Password => {
  // const salt = cryptojs.randomBytes(128).toString('base64')
  let salt = cryptojs.lib.WordArray.random(128 / 8);
  salt = salt.toString(cryptojs.enc.Base64);
  const iterations = parseInt(process.env.PBKDF2_ITERATIONS as string) || 10000;
  const key512Bits = cryptojs.PBKDF2(password, salt, {
    keySize: parseInt(process.env.PBKDF2_KEY_SIZE as string) || 512 / 32,
    iterations,
    hasher: cryptojs.algo.SHA256,
  });
  return {
    hash: key512Bits.toString(cryptojs.enc.Base64),
    salt,
    iterations,
  };
};

const isEmailValid = (email: string): boolean => {
  // check if email is valid and check if doesn't contain + character
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email) && !email.includes('+');
};
// POST /api/user
async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.body;
  if (!isEmailValid(email)) throw new ApiError(400, 'Email format is invalid');
  const data = await adminSdk.GetUsersAndAccountByEmail({ email });
  const existingUser = data?.users[0];
  if (existingUser) {
    let errorMessage = `User with email ${email} already exists`;
    // TODO check if provider is credentials
    if (existingUser.accounts.length)
      errorMessage += `. Please login using the ${existingUser.accounts[0].provider} provider`;
    else errorMessage += '. Please login with this email and your password';
    throw new ApiError(400, errorMessage);
  } else {
    const { password, ...user } = req.body;
    const hashedPassword = hashPasswordWithSalt(password);
    const id = uuidv4();
    const data = await adminSdk.CreateUserWithCredentials({
      user: {
        ...user,
        id,
      },
      password: { ...hashedPassword, userId: id },
    });
    const createdUser = data?.insert_users_one;
    res.json(createdUser);
  }
}

export default function create(req: NextApiRequest, res: NextApiResponse) {
  return withErrorHandling(
    req,
    res
  )(withMiddlewares(withMethodsGuard(['POST']), handler));
}
