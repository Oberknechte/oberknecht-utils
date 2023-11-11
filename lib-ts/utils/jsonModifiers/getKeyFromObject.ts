import { convertToArray } from "..";

export function getKeyFromObject(
  object: Record<string, any>,
  keys: string | string[],
  throwErr?: boolean,
  noRecreate?: boolean
): any {
  let keys_ = convertToArray(keys, false, noRecreate);
  let value = object;
  for (let i = 0; i < keys_.length; i++) {
    if (value.hasOwnProperty(keys_[i])) {
      value = value[keys_[i]];
    } else {
      let err = Error(`key ${keys_[i]} not in value`);
      if (throwErr) throw err;
      return undefined;
    }
  }

  return value;
}
