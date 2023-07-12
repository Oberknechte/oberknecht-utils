import { convertToArray, recreate, extendedTypeof } from ".";

export function addKeysToObject(
  object: Record<string, any>,
  keypath: string | string[],
  value: any
): Record<string, any> {
  let keypath_ = convertToArray(keypath, false);

  let object_ = recreate(object);
  let parentObj = object_;
  for (let i = 0; i < keypath_.length - 1; i++) {
    let key = keypath_[i];
    if (!(key in parentObj) || extendedTypeof(parentObj[key]) !== "json")
      parentObj[key] = {};

    parentObj = parentObj[key];
  }

  parentObj[keypath_.at(-1)] = value;

  return object_;
}
