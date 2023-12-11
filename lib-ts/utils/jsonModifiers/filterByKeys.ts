import { convertToArray, recreate } from "../";

export function filterByKeys(
  object: Record<string, any>,
  allowedKeys?: string | string[],
  disallowedKeys?: string | string[]
) {
  let r = {};
  if (allowedKeys)
    Object.keys(object)
      .filter((a) => convertToArray(allowedKeys, false).includes(a))
      .forEach((a) => (r[a] = object[a]));
  if (disallowedKeys) {
    if (!allowedKeys) r = recreate(object);
    Object.keys(r)
      .filter((a) => disallowedKeys.includes(a))
      .forEach((a) => delete r[a]);
  }

  return r;
}
