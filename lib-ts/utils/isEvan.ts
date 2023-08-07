import { isNullUndefined } from "./isNullUndefined";

export function isEvan(n: number) {
  if (isNullUndefined(n)) return NaN;
  return Math.trunc(n / 2) === n / 2;
}
