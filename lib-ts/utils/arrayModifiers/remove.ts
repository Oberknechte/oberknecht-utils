import { recreate } from "..";

export function remove(arr: any[], removeElem: any, noRecreate?: boolean) {
  if (!arr || !removeElem) return arr;
  let arr_: any[] = noRecreate ? arr : recreate(arr);
  return arr_.filter((a) => a !== removeElem);
}
