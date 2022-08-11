import { adminSdk } from '@governance/gql-admin';
import { AdapterUser } from 'next-auth/adapters';

describe('hasura Next Auth Adapter', () => {
  it('should create user', async () => {
    const user = {};
    const data = await adminSdk.CreateUser({ user });
    const expectedUser = data?.insert_users_one as AdapterUser;
    expect(data).toEqual(expectedUser);
  });
});
