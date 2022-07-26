import 'next-auth/jwt'

// Read more at: https://next-auth.js.org/getting-started/typescript#module-augmentation

import type { DefaultUser, DefaultSession } from 'next-auth'

declare module 'next-auth/jwt' {
    interface Session {
        user?: DefaultUser & {
            id: string
            access_token: string
        }
    }
}
