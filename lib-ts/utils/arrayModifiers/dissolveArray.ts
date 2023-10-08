import { convertToArray } from "./convertToArray";
import { extendedTypeof } from "../extendedTypeof";

type arrTypeReturn<T> = T extends any[] ? any : T;

export function dissolveArray<arrType extends Array<string | number | any>>(
  ...arr: arrType
): arrTypeReturn<arrType>[] {
  let arr_ = convertToArray(arr, false);
  let r = [];
  function actualDissolveArray(a: any) {
    if (extendedTypeof(a) !== "array") r.push(a);
    else a.forEach((b) => actualDissolveArray(b));
  }
  arr_.forEach(actualDissolveArray);

  return r;
}
