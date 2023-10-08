import { convertToArray } from "../convertToArray";
import { deleteKeyFromObject } from "../deleteKeyFromObject";
import { extendedTypeof } from "../extendedTypeof";

export function deleteKeysFromJSON(o: Record<string, any>, keys: string[]) {
  if (extendedTypeof(o) !== "json") return o;
  convertToArray(keys, false).forEach((a) => {
    deleteKeyFromObject(o, a);
  });
  return o;
}
