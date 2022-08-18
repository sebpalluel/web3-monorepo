export function isJestRunning() {
  return process.env.JEST_WORKER_ID !== undefined;
}

export function isCypressRunning() {
  return window && (window as any).Cypress !== undefined;
}
