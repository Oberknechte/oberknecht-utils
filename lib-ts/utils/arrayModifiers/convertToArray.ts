import { isNullUndefined } from "..";
import { recreate } from "../recreate";

export function convertToArray<returnundefinedBoolean extends boolean>(
  arr: Array<any> | any,
  returnundefined?: returnundefinedBoolean | undefined,
  noRecreate?: boolean
): returnundefinedBoolean extends true ? Array<any> | undefined : Array<any> {
  let arr_ = !noRecreate ? recreate(arr) : arr;
  if (isNullUndefined(arr_)) return returnundefined ? (undefined as any) : [];
  return !Array.isArray(arr_) ? [arr_] : arr_;
}
