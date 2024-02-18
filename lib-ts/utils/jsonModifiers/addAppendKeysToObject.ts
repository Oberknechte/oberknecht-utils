import {
  addKeysToObject,
  convertToArray,
  getKeyFromObject,
  joinValues,
} from "..";

export function addAppendKeysToObject(
  object: Record<string, any>,
  keys: string | string[],
  value: any
): Record<string, any> {
  let object_ = object;
  let keys_ = convertToArray(keys, false);

  let oldvalue = getKeyFromObject(object_, keys_);
  let newvalue = oldvalue ?? value;

  newvalue = joinValues([newvalue, value], true);

  addKeysToObject(object_, keys_, newvalue);

  return object_;
}
