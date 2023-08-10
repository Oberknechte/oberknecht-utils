export function secondCase(s: string): string {
  let r: string = "";

  s?.split("")?.forEach((a, i) => (r += i % 2 === 0 ? a : a.toUpperCase()));

  return r;
}
