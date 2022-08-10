import { Client } from 'pg';

let connected = false;
const client = new Client(process.env.POSTGRES_CONNECTION);
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
