export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function delayData(ms = 2000, data: any) {
  await delay(ms);
  return data;
}
