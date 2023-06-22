export function getFullNumber(n: number): number {
  if (!n || typeof n !== "number") return -1;
  if (Math.trunc(n) !== n) return Math.trunc(n) + 1;
  return n;
}
