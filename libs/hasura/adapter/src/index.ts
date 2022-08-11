import { randomBytes } from 'crypto';
import type { Adapter, AdapterUser, AdapterSession } from 'next-auth/adapters';
import { adminSdk } from '@governance/gql-admin';

export function adapter(): Adapter {
  return {
    async createUser(data) {
      const user: AdapterUser = {
        ...(data as any),
        id: randomBytes(32).toString('hex'),
      };
      await adminSdk.CreateUser({ user });
      return user;
    },
    async getUser(id) {
      const data = await adminSdk.GetUser({ id });
      return (data?.users[0] as AdapterUser) || null;
    },
    async getUserByEmail(email) {
      const data = await adminSdk.GetUserByEmail({ email });
      return (data?.users[0] as AdapterUser) || null;
    },
    async getUserByAccount({ providerAccountId, provider }) {
      const data = await adminSdk.GetUserByAccount({ provider, providerAccountId });
      return data?.users[0] as AdapterUser;
    },
    async updateUser(user) {
      const { id } = user;
      await adminSdk.UpdateUser({ id: id as string, user });
      return user as AdapterUser;
    },
    async deleteUser(userId) {
      return null;
    },
    async linkAccount(account) {
      const data = await adminSdk.LinkAccount({
        account: {
          id: randomBytes(32).toString('hex'),
          ...account,
        },
      });
      return data?.insert_accounts_one as any;
    },
    async unlinkAccount({ providerAccountId }) {
      await adminSdk.DeleteAccount({ id: providerAccountId });
    },
    async createSession(data) {
      const session: AdapterSession = {
        ...(data as any),
        id: randomBytes(32).toString('hex'),
      };
      await adminSdk.CreateSession({
        session,
      });
      return session;
    },
    async getSessionAndUser(sessionToken) {
      const data = await adminSdk.GetSessionAndUser({ sessionToken });
      if (data?.sessions[0]?.user) {
        const { user, ...session } = data.sessions[0];
        return { user, session } as { user: AdapterUser; session: AdapterSession };
      }
      return null;
    },
    async updateSession({ sessionToken }) {
      return null;
    },
    async deleteSession(sessionToken) {
      return null;
    },
    async createVerificationToken(verificationToken) {
      await adminSdk.CreateVerificationToken({ verificationToken });
      return verificationToken;
    },
    async useVerificationToken({ token }) {
      const data = await adminSdk.GetVerificationToken({ token });
      const verifToken = data?.verificationTokens[0];
      if (verifToken) await adminSdk.DeleteVerificationToken({ token: verifToken.token });
      // If token already used/deleted, just return null
      if (verifToken?.expires < new Date()) {
        return null;
      }
      return verifToken;
    },
  };
}
