import { convertToArray } from ".";

export function deleteKeyFromObject(
  object: Record<string, any>,
  keys: string | string[],
  throwErr?: boolean
): Record<string, any> | undefined {
  let keys_ = convertToArray(keys, false);
  let parentObj = object;
  for (let i = 0; i < keys_.length - 1; i++) {
    if (!(keys_[i] in parentObj)) {
      let err = Error(`key ${keys_[i]} not in object`);
      if (throwErr) throw err;
      return undefined;
    } else {
      parentObj = parentObj[keys_[i]];
    }
  }

  let delkey = keys_[keys_.length - 1];
  delete parentObj[delkey];

  return object;
}
