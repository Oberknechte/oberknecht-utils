import { convertToArray } from "./";

export function removeArrayDuplicates(arr: any[]): any[] {
  let r: any[] = [];

  convertToArray(arr, false).forEach((a: any) => {
    if (!r.includes(a)) r.push(a);
  });

  return r;
}
