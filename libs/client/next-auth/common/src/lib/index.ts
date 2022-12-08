export function getNextAuthURL(): string {
  return process.env.VERCEL_URL || 'http://localhost:3000';
}
