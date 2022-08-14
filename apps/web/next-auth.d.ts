// Read more at: https://next-auth.js.org/getting-started/typescript#module-augmentation

import 'next-auth';

declare module 'next-auth' {
  interface User {
    id: string;
    access_token?: string;
  }

  interface Session {
    user: User;
  }
}
