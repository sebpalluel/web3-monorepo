import "next-auth/jwt"

// Read more at: https://next-auth.js.org/getting-started/typescript#module-augmentation

import type { DefaultUser } from "next-auth";

declare module "next-auth/jwt" {
  interface JWT {
    /** The user's role. */
    userRole?: "admin"
  }
  interface Session {
    user?: DefaultUser & {
      id: string;
    };
  }
}
