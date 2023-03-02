export interface MyRequestInit extends Omit<RequestInit, 'headers'> {
  headers?: Record<string, string>;
}

export async function fetchJSON(
  url: RequestInfo | URL,
  options: MyRequestInit | undefined = {}
) {
  const { headers } = options;
  const defaultHeaders: HeadersInit = {
    ...headers,
    'Content-Type': headers?.['Content-Type'] || 'application/json',
  };
  Object.assign(options, { headers: defaultHeaders, credentials: 'include' });
  return fetch(url, options).then(async (res) => {
    if (!res.ok) {
      throw await res.json();
    }
    return res.json();
  });
}

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export function toPascalCase(s: string): string {
  return (s.match(/[a-zA-Z0-9]+/g) || [])
    .map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
    .join('');
}

export function convertArrayOfObjtoObjWithKeys(arr: any[], key: string): any {
  return arr.reduce((obj, item) => ((obj[item?.[key]] = item), obj), {});
}

export function isServerSide(): boolean {
  return typeof window === 'undefined';
}

export function isJestRunning() {
  return process.env.JEST_WORKER_ID !== undefined;
}

export function isCypressRunning() {
  return window && (window as any).Cypress !== undefined;
}

export function isDev() {
  return (
    process.env.NODE_ENV === 'development' ||
    process.env.NEXT_PUBLIC_VERCEL_ENV === 'development'
  );
}

export function isProd() {
  return (
    process.env.NODE_ENV === 'production' ||
    process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
  );
}

export function isPreviewDeployment(): boolean {
  return (
    !!process.env.VERCEL_GIT_COMMIT_SHA || !!process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA
  );
}

export function isPreviewOrPRDeployment(): boolean {
  return (
    !!process.env.VERCEL_GIT_COMMIT_SHA ||
    !!process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA ||
    !!process.env.VERCEL_GIT_COMMIT_REF?.startsWith('pull/') ||
    !!process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF?.startsWith('pull/')
  );
}
