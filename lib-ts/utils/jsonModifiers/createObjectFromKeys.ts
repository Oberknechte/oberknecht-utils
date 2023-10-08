import { convertToArray } from "..";

export function createObjectFromKeys(
  keys: string | string[],
  value: any
): Record<string, any> {
  let o = {};
  let keys_ = convertToArray(keys, false);
  function actualAppend(i: number, o2: Record<string, any>) {
    o2[keys_[i]] = {};
    if (i < keys_.length - 1) actualAppend(i + 1, o2[keys_[i]]);
    else o2[keys_[i]] = value;
  }

  actualAppend(0, o);

  return o;
}
