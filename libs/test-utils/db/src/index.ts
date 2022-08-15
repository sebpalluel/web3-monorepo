/* eslint-disable @typescript-eslint/no-var-requires */
import { Client } from 'pg';
const fs = require('fs');

let connected = false;
let dbName = '';
// TODO change localhost for 'test-db' when running on docker
const client = new Client('postgres://postgres:password@localhost:5454/postgres');
export const dbClient = async (): Promise<Client> => {
  if (!connected) {
    await client.connect();
    connected = true;
  }
  return client;
};

export const closeConnection = async () => {
  if (connected) {
    await client.end();
  }
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
