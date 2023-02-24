import { isProd, isServerSide } from '@utils';

export function getNextAppURL(): string {
  const vercelURL =
    `https://${process.env.VERCEL_URL}` ||
    `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  if (isProd()) {
    if (process.env.VERCEL_GITHUB_DEPLOYMENT) return vercelURL;
    return isServerSide() ? (process.env.NEXTAUTH_URL as string) : vercelURL;
  } else {
    return vercelURL || 'http://localhost:3000';
  }
}
