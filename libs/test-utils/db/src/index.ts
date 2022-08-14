import { Client } from 'pg';

let connected = false;
let dbName = '';
// TODO change localhost for 'test-db' when running on docker
const client = new Client('postgres://postgres:password@localhost:5454/postgres');
export const getClient = async (): Promise<Client> => {
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

export const creatDb = async () => {
  const client = await getClient();
  dbName = 'test-' + Math.random().toString(36).substring(7);
  await client.query(`
    CREATE DATABASE ${dbName}
  `);
};

export const clearDb = async () => {
  const client = await getClient();
  await client.query('TRUNCATE TABLE users, tokens, refresh_tokens, sessions CASCADE;');
};
