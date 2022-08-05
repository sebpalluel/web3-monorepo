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
  Object.assign(options, { headers: defaultHeaders });
  return fetch(url, options).then(async (res) => {
    if (!res.ok) {
      throw await res.json();
    }
    return res.json();
  });
}
