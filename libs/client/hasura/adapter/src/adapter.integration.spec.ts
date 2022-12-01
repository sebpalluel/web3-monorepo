import { deleteUsers } from '@test-utils/db';
import { adapter as HasuraAdapter } from './index';
import { AdapterAccount } from 'next-auth/adapters';

describe('hasura Next Auth Adapter', () => {
  const user = {
    id: '',
    emailVerified: null,
    name: 'Alpha Admin',
    image: null,
    email: 'alpha_admin@test.io',
  };
  const account: AdapterAccount = {
    id: '',
    access_token: '',
    expires_at: 12312424,
    id_token: 'dummy',
    refresh_expires_in: null,
    refresh_token: 'dummy',
    scope: 'openid',
    session_state: 'dummy',
    token_type: 'Bearer',
    userId: '',
    provider: 'github',
    providerAccountId: '12345823',
    type: 'oauth',
  };
  const adapter = HasuraAdapter();
  afterAll(async () => {
    // // // ✅ Best Practice: Clean-up resources after each run
    //////
    await deleteUsers();
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
  const userKeycloak = {
    id: '',
    emailVerified: null,
    name: 'Jane DOE',
    email: 'test@keycloak.com',
    image: undefined,
  };
  const accountKeycloak: AdapterAccount = {
    provider: 'keycloak',
    type: 'oauth',
    providerAccountId: 'f8924a92-04ee-4d61-9868-a8258220c66e',
    access_token:
      'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJRNnlPbjAydXE3Z280MU9abVktczY0YlpUN2IxanJHclpOeFJHZUEyQ29VIn0.eyJleHAiOjE2NjUwNjcxMDcsImlhdCI6MTY2NTA2NzA0NywiYXV0aF90aW1lIjoxNjY1MDY3MDQ3LCJqdGkiOiI3MzNkNTAyZS1kNGNkLTQwY2MtYmMzNS0yYzc2OTg0YzgyMWEiLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgxMDAvYXV0aC9yZWFsbXMvbWFzdGVyIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImY4OTI0YTkyLTA0ZWUtNGQ2MS05ODY4LWE4MjU4MjIwYzY2ZSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImFwcCIsInNlc3Npb25fc3RhdGUiOiI2NjAwN2IyOC0xNzhjLTQzOTUtOGI3Ny00MTVlMDUzOThjODciLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImRlZmF1bHQtcm9sZXMtbWFzdGVyIiwib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJzaWQiOiI2NjAwN2IyOC0xNzhjLTQzOTUtOGI3Ny00MTVlMDUzOThjODciLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsIm5hbWUiOiJKYW5lIERPRSIsInByZWZlcnJlZF91c2VybmFtZSI6ImRpZDprZXk6ejZta3FlN2d3YnE0NWVxdmlpeTZweDZ4NW5wMmxzM212bXZlZ2o1Z2lweDhiYmZwIiwiZ2l2ZW5fbmFtZSI6IkphbmUiLCJmYW1pbHlfbmFtZSI6IkRPRSIsImVtYWlsIjoic2ViQHRlc3QuY29tIn0.G_3n0IuDY8Fh28CfwOKN6T0QGqd1SmohBrMVkNtt3AMRNDie3CEHyjX9zeYGMOcRcQVI29jq8oPyFe52ce5YtYGmMAiIaLjeDBGA2xeSL1PJVAMIT3xg5LJlXQ3I1LjYycw8sPniBsNQRNuB6hFu8x6F588CBCMCF7OoJaGo_BK7NTdQU4GDwRACH29huzwUnvxIT48f4fjkHo4XOJE_R6WLGxLQHylcyXKPQmQob41RIMtTAyUs1OzusYZjL8qwAhp38uQayaHzos6Z2fIVohshMJn8V0ARBfwRsvgtP5csGyW8Re133nqC9cSMlS4OCilO6hWyToN-nhLNTAZi3A',
    expires_at: 1665067107,
    refresh_expires_in: 1800,
    refresh_token:
      'eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJjNGQ4ODEzOC0wMzUwLTQwY2MtYWYxYy1lZmM4ODBmMTI0MmYifQ.eyJleHAiOjE2NjUwNjg4NDcsImlhdCI6MTY2NTA2NzA0NywianRpIjoiNWUyMGQzYWMtZWVmNS00MGYwLTgwOTMtMDA3MjE3MzQxMDFlIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MTAwL2F1dGgvcmVhbG1zL21hc3RlciIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODEwMC9hdXRoL3JlYWxtcy9tYXN0ZXIiLCJzdWIiOiJmODkyNGE5Mi0wNGVlLTRkNjEtOTg2OC1hODI1ODIyMGM2NmUiLCJ0eXAiOiJSZWZyZXNoIiwiYXpwIjoiYXBwIiwic2Vzc2lvbl9zdGF0ZSI6IjY2MDA3YjI4LTE3OGMtNDM5NS04Yjc3LTQxNWUwNTM5OGM4NyIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJzaWQiOiI2NjAwN2IyOC0xNzhjLTQzOTUtOGI3Ny00MTVlMDUzOThjODcifQ.r8o1ll_8E91w8Izq_XrAu45IRi4xKOsJ_VzFUkU62sg',
    token_type: 'Bearer',
    id_token:
      'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJRNnlPbjAydXE3Z280MU9abVktczY0YlpUN2IxanJHclpOeFJHZUEyQ29VIn0.eyJleHAiOjE2NjUwNjcxMDcsImlhdCI6MTY2NTA2NzA0NywiYXV0aF90aW1lIjoxNjY1MDY3MDQ3LCJqdGkiOiIyYzU5ZjJlNy02Zjc4LTQxNTYtYjAwMC00N2JmNzc1OTY5YjIiLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgxMDAvYXV0aC9yZWFsbXMvbWFzdGVyIiwiYXVkIjoiYXBwIiwic3ViIjoiZjg5MjRhOTItMDRlZS00ZDYxLTk4NjgtYTgyNTgyMjBjNjZlIiwidHlwIjoiSUQiLCJhenAiOiJhcHAiLCJzZXNzaW9uX3N0YXRlIjoiNjYwMDdiMjgtMTc4Yy00Mzk1LThiNzctNDE1ZTA1Mzk4Yzg3IiwiYXRfaGFzaCI6IjNndTFfd3BVa3h3TzJHc21lemx0b0EiLCJhY3IiOiIxIiwic2lkIjoiNjYwMDdiMjgtMTc4Yy00Mzk1LThiNzctNDE1ZTA1Mzk4Yzg3IiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoiSmFuZSBET0UiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJkaWQ6a2V5Ono2bWtxZTdnd2JxNDVlcXZpaXk2cHg2eDVucDJsczNtdm12ZWdqNWdpcHg4YmJmcCIsImdpdmVuX25hbWUiOiJKYW5lIiwiZmFtaWx5X25hbWUiOiJET0UiLCJlbWFpbCI6InNlYkB0ZXN0LmNvbSJ9.n-4ABj5a2Jy78iEWZ6xL9gtpPcj9zj0jut8Qs-jM9Nb-7vr44VtiQ3srYUmrr_VL4b1MXJxYDjbOx8Ep5sEdDf8j4ct4J3H-NeK0J9rQO5kkNr9fLPCzFt0r7c_bgQdE9Xn9gfWrdtfFNxn4srnnurwfVoyVOZ_pCuz3FFM5b6wqWeTgylhSWRqKFQaWKtq_88eow8nEUHst5utBAVri2aRuxWffTK9SeivnB9OWuvQxLi6x8bS8J-aKq1rmabuS-gS1O6MfyfpITLTsMehK3ty-H7tMiMZeQO-J7J2q9xFafkIR-OK5cWpU2Pda4lI2elQUjPX00fJrrugdv2Z7-g',
    session_state: '66007b28-178c-4395-8b77-415e05398c87',
    scope: 'openid profile email',
    userId: 'beabb5d1-008a-4b9f-9937-240308cb93cb',
  };
  it('should link account of type keycloak', async () => {
    const userCreated = await adapter.createUser(userKeycloak);
    userKeycloak.id = userCreated.id;
    accountKeycloak.userId = userKeycloak.id;
    const data = await adapter.linkAccount(accountKeycloak);
    accountKeycloak.id = data?.id;
    expect(accountKeycloak).toEqual(data);
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
