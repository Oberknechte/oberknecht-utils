import {
  extendedType_String,
  extendedType_Symbol,
  extendedTypeof,
  extendedTypeofCustom,
} from "../extendedTypeof";
import { addKeysToObject } from "./addKeysToObject";

export function filterByJson(
  object: Record<string, any>,
  targetObject: Record<string, any>,
  useExtendedTypes?: boolean
) {
  let r = {};

  function _filter(
    obj_: Record<string, any>,
    targetObj_: Record<string | symbol, any>,
    currentPath: Array<string>
  ) {
    if (Object.keys(targetObj_).length === 0) {
      [extendedType_String, extendedType_Symbol].forEach((a) => {
        if (targetObj_[a] !== undefined) {
          Object.keys(obj_).forEach((key) => {
            if (extendedTypeofCustom(key) !== a) return;
            _filter(obj_[key], targetObj_[a], [...currentPath, key]);
          });
        }
      });
    } else {
      Object.keys(targetObj_).forEach((key, i) => {
        let key_: string = "";
        if (typeof key === "symbol") {
          if (extendedTypeofCustom(obj_[key]) !== key) return;
          key_ = Object.keys(obj_)[i];
        } else if (obj_[key] === undefined) {
          return;
        } else {
          key_ = key;
        }

        if (key_.length === 0) return console.log("length 0");

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
