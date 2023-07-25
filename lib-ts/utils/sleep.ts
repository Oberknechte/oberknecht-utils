export async function sleep(time: number): Promise<any> {
  return new Promise((resolve) => setTimeout(resolve, time ?? 1000));
}
