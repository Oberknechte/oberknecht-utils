import { isNullUndefined, recreate } from "..";

export function splice(arr: any[], index: number, deleteCount?: number): any[] {
  if (!arr || isNullUndefined(index) || !arr[index]) return arr;
  let arr_ = recreate(arr);
  arr_.splice(index, deleteCount ?? 1);
  return arr_;
}
