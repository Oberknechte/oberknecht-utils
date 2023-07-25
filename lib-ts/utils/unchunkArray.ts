import { extendedTypeof } from "./extendedTypeof";

/** @see https://github.com/NuroC/moomoo-in-depth/tree/main/protocol#unchunk-arrays */
export function unchunkArray(arr: Array<Array<any>>): Array<any> {
  if (extendedTypeof(arr) !== "array") return [];

  let r: Array<any> = [];
  for (let i = 0; i < arr.length; i++) r = r.concat(arr[i]);
  return r;
}
