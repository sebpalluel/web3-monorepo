import { dbClient } from '@governance/test-utils-db';
import { adapter as HasuraAdapter } from './index';
import { Account } from 'next-auth';

describe('hasura Next Auth Adapter', () => {
  const user = {
    id: '',
    emailVerified: null,
    name: 'Alpha Admin',
    image: null,
    email: 'alpha_admin@governance.io',
  };
  const account: Account = {
    id: '',
    userId: '',
    provider: 'github',
    providerAccountId: '12345823',
    type: 'oauth',
  };
  const adapter = HasuraAdapter();
  beforeAll(async () => {
    const client = await dbClient();
    // ️️️✅ Best Practice: Clean-up resources after each run
    client.query('TRUNCATE users CASCADE;');
  });
  afterAll(async () => {
    const client = await dbClient();
    // ️✅ Best Practice: Clean-up resources after each run
    client.query('TRUNCATE users CASCADE;');
  });
  it('should create user and assign an id', async () => {
    const data = await adapter.createUser(user);
    user.id = data.id;
    expect(user).toEqual(data);
  });
  it('should get user with an id', async () => {
    const data = await adapter.getUser(user.id);
    expect(user).toEqual(data);
  });
  it('should get user by email', async () => {
    const data = await adapter.getUserByEmail(user.email);
    expect(user).toEqual(data);
  });
  it('should update user', async () => {
    const updatedName = 'Alpha Admin Updated';
    user.name = updatedName;
    const data = await adapter.updateUser(user);
    expect(user).toEqual(data);
    const fetchedUser = await adapter.getUserByEmail(user.email);
    expect(user).toEqual(fetchedUser);
  });
  it('should link account', async () => {
    account.userId = user.id;
    const data = await adapter.linkAccount(account);
    expect(account).toEqual(data);
  });
  it('should get user by account', async () => {
    const data = await adapter.getUserByAccount(account);
    expect(user).toEqual(data);
  });
  it('should unlink account', async () => {
    await adapter.unlinkAccount?.(account);
    const data = await adapter.getUserByAccount(account);
    expect(data).toBeUndefined();
  });
});
