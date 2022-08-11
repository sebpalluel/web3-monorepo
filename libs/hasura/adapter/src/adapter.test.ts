import { adminSdk } from '@governance/gql-admin';
import { AdapterUser } from 'next-auth/adapters';
import { getClient } from '@governance/test-utils-db';

describe('hasura Next Auth Adapter', () => {
  it('should create user', async () => {
    const user = {
      id: '76422e8490dda28b515ea63ad20cb30f113d658a595f6efe47d61b606cb94fcb',
      emailVerified: null,
      name: 'Asdasf',
      image: null,
      email: 'alpha_admin@governance.io',
    };
    const data = await adminSdk.CreateUser({ user });
    const expectedUser = data?.insert_users_one as AdapterUser;
    expect(user).toEqual(expectedUser);
  });
  beforeAll(async () => {
    const client = await getClient();
    // // ️️️✅ Best Practice: Clean-up resources after each run
    client.query('TRUNCATE users CASCADE;');
  });
  afterAll(async () => {
    const client = await getClient();
    // // ️️️✅ Best Practice: Clean-up resources after each run
    client.query('TRUNCATE users CASCADE;');
  });
});
