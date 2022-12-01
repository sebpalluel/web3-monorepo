/* eslint-disable @typescript-eslint/no-var-requires */
import { isJestRunning } from '@utils';
import { Client } from 'pg';

const fs = require('fs');

let connected = false;
let dbName = '';
// assigning the right port depending of if jest or cypress is running
// localhost here because has to be working both in local or on nx cloud. work thanks to extra_hosts on db container
const client = new Client(
  `postgres://postgres:password@localhost:${isJestRunning() ? '5454' : '5432'}/postgres`
);
export const dbClient = async (): Promise<Client> => {
  if (!connected) {
    await client.connect();
    connected = true;
  }
  return client;
};

export const createDb = async () => {
  const client = await dbClient();
  dbName = 'test-' + Math.random().toString(36).substring(7);
  await client.query(`
    CREATE DATABASE ${dbName}
  `);
};

export const clearDb = async () => {
  const client = await dbClient();
  await client.query('TRUNCATE TABLE users, tokens, refresh_tokens, sessions CASCADE;');
};

export const deleteUsers = async () => {
  const client = await dbClient();
  await client.query('TRUNCATE users CASCADE;');
};

export const deleteUser = async (email: string) => {
  const client = await dbClient();
  // sql delete user from users table cascade delete all tokens and sessions
  await client.query(`
    DELETE FROM users CASCADE
    WHERE email = '${email}'
  `);
};

export const seedDb = async (filePath: string) => {
  const client = await dbClient();
  const dataSql = fs.readFileSync(filePath).toString();
  await client.query(dataSql);
};

export const queryDb = async (sql: string) => {
  const client = await dbClient();
  await client.query(sql);
};

// export const deleteSeedDb = async (filePath: string) => {
//   const client = await dbClient();
//   const dataSql = fs.readFileSync(filePath).toString();

// }
