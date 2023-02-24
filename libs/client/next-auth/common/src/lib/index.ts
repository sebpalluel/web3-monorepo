import { isProd } from '@utils';

export function getNextAuthURL(): string {
  if (isProd()) {
    if (process.env.VERCEL_GITHUB_DEPLOYMENT) return process.env.VERCEL_URL as string;
    return process.env.NEXTAUTH_URL as string;
  } else {
    return (process.env.VERCEL_URL as string) || 'http://localhost:3000';
  }
}
