import { extendedTypeof, extendedTypeofCustom } from "../extendedTypeof";
import { addKeysToObject } from "./addKeysToObject";

export function filterByJson(
  object: Record<string, any>,
  targetObject: Record<string, any>,
  useExtendedTypes?: boolean
) {
  let r = {};

  function _filter(
    obj_: Record<string, any>,
    targetObj_: Record<string, any>,
    currentPath: Array<string>
  ) {
    Object.keys(targetObj_).forEach((key) => {
      if (obj_[key] === undefined) return;

      if (extendedTypeof(targetObj_[key]) === "json") {
        if (extendedTypeof(obj_[key]) !== "json") return;

        addKeysToObject(
          r,
          [...currentPath, key],
          Array.isArray(obj_[key]) ? [] : {}
        );
        _filter(obj_[key], targetObj_[key], [...currentPath, key]);
      } else if (
        useExtendedTypes
          ? targetObj_[key] === extendedTypeofCustom(obj_[key])
          : extendedTypeof(targetObj_[key]) === extendedTypeof(obj_[key])
      ) {
        addKeysToObject(r, [...currentPath, key], obj_[key]);
      }
    });
  }

  _filter(object, targetObject, []);

  return r;
}

/*

Ex1:

const obj = { a: { b1: { c: 1 }, b2: 2 } };

const obj2 = { a: { b1: { c: extendedType_Number } } };

console.log(filterByJson(obj, obj2, true));

Output: { a: { b1: { c: 1 } } }

--------

Ex2:

const obj = { a: { b1: { c: 1 }, b2: 2 } };

const obj2 = { a: { b1: extendedType_JSON } };

console.log(filterByJson(obj, obj2, true));

Output: { a: { b1: { c: 1 } } }

*/
