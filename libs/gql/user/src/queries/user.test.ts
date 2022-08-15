// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {
  alphaAdminClient,
  betaAdminClient,
  sebGoogleClient,
} from '@governance/test-utils-gql';
import { getSdk } from '../generated';
import { deleteUsers, seedDb } from '@governance/test-utils-db';

describe('user access security tests', () => {
  const alphaAdmin = alphaAdminClient();
  const betaAdmin = betaAdminClient();
  const sebGoogle = sebGoogleClient();
  beforeAll(async () => {
    // // ️️️✅ Best Practice: Clean-up resources after each run
    await deleteUsers();
    // seed the database with three users alpha, beta and seb google
    await seedDb('./tools/test/data/users.sql');
  });
  afterAll(async () => {
    await deleteUsers();
  });
  it('user alpha can retrieve his information', async () => {
    const data = await alphaAdmin.getUser({ id: alphaAdmin.me.id });
    expect(data.users[0]).toEqual(alphaAdmin.me);
  });
  it("user beta can't retrieve alpha's informations", async () => {
    const data = await betaAdmin.getUser({ id: alphaAdmin.me.id });
    expect(data.users[0]).toBeUndefined();
  });
});
