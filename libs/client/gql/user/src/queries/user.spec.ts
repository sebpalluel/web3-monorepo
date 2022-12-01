import { alphaAdminClient, betaAdminClient, sebGoogleClient } from '@test-utils/gql';
import { deleteUsers, seedDb } from '@test-utils/db';

describe('user access security tests', () => {
  const alphaAdmin = alphaAdminClient();
  const betaAdmin = betaAdminClient();
  const sebGoogle = sebGoogleClient();
  beforeAll(async () => {
    await deleteUsers();
    // // // // seed the database with three users alpha, beta and seb
    await seedDb('./tools/test/seeds//users.sql');
  });

  afterAll(async () => {
    await deleteUsers();
  });
  it('user alpha can retrieve his information', async () => {
    const data = await alphaAdmin.getUser({ id: alphaAdmin.me.id });
    expect(data.users[0]).toEqual(alphaAdmin.me);
  });
  it("user beta can't retrieve alpha's information", async () => {
    const data = await betaAdmin.getUser({ id: alphaAdmin.me.id });
    expect(data.users[0]).toBeUndefined();
  });
  it('user beta can retrieve his information by email', async () => {
    const data = await betaAdmin.getUserByEmail({ email: betaAdmin.me.email as string });
    expect(data.users[0]).toEqual(betaAdmin.me);
  });
  it("user seb can't retrieve beta's information by email", async () => {
    const data = await sebGoogle.getUserByEmail({ email: betaAdmin.me.email as string });
    expect(data.users[0]).toBeUndefined();
  });
});
