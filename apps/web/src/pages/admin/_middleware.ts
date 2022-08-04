import { withAuth } from 'next-auth/middleware';
import { jwtOptions } from '@governance/next-auth';

// More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware
export default withAuth({
  // jwt: { decode: jwtOptions.decode },
  callbacks: {
    authorized: ({ token }) => {
      console.log({ token });
      return token?.userRole === 'admin';
    },
  },
});
