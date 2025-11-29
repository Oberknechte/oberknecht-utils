import {
  extendedType_String,
  extendedType_Symbol,
  extendedType_TypesArray,
  extendedTypeof,
  extendedTypeofCustom,
} from "../extendedTypeof";
import { addKeysToObject } from "./addKeysToObject";
import { filterByArray } from "../arrayModifiers/filterByArray";

type advancedRulesType = {
  strictFiltering?: boolean; // will return undefined if not all keys match and replacingObject is not set
  strictFilteringByKeys?: boolean; // will remove an object if its child keys do not match the target object's keys
  arrayStrictFiltering?: boolean; // only returns the array if all items match the target array, if false: partial matches are allowed (will remove items inbetween the allowed ones)
  // replacingObject?: Record<string, any>,
  defaultReturnValue?: Record<string, any>;
  strictMatchingFailedCallback?: () => void;
};

export function filterByJson(
  object: Record<string, any>,
  targetObject: Record<string, any>,
  useExtendedTypes?: boolean,
  advancedRules?: advancedRulesType
  // arrayFilterStrict?: boolean // only returns the array if all items match the target array, if false: partial matches are allowed (will remove items inbetween the allowed ones)
) {
  let r = {};
  let strictMatchFailed = false;

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
            return _filter(obj_[key], targetObj_[a], [...currentPath, key]);
          });
        }
      });
    } else {
      if (
        advancedRules?.strictFilteringByKeys === true &&
        Object.keys(obj_).sort().join("\u0000") !== Object.keys(targetObj_).sort().join("\u0000")
      )
        return (strictMatchFailed = true);

      Object.keys(targetObj_).forEach((key, i) => {
        let key_: string = "";
        if (typeof key === "symbol") {
          if (extendedTypeofCustom(obj_[key]) !== key) {
            return (strictMatchFailed = true);
          }
          key_ = Object.keys(obj_)[i];
        } else if (obj_[key] === undefined) {
          return (strictMatchFailed = true);
        } else {
          key_ = key;
        }

        if (key_.length === 0) return (strictMatchFailed = true);

        if (extendedTypeof(targetObj_[key]) === "json") {
          if (extendedTypeof(obj_[key]) !== "json")
            return (strictMatchFailed = true);

          // addKeysToObject(r, [...currentPath, key], {});
          _filter(obj_[key], targetObj_[key], [...currentPath, key]);
        } else if (extendedTypeof(targetObj_[key]) === "array") {
          if (extendedTypeof(obj_[key]) !== "array")
            return (strictMatchFailed = true);
          let arrFilter = filterByArray(
            obj_[key],
            targetObj_[key],
            useExtendedTypes,
            {
              filterStrict: advancedRules?.arrayStrictFiltering ?? false,
              strictMatchingFailedCallback: () => {
                strictMatchFailed = true;
              },
            }
          );

          if (arrFilter !== undefined)
            addKeysToObject(r, [...currentPath, key], arrFilter);
        } else if (
          useExtendedTypes
            ? targetObj_[key] === extendedTypeofCustom(obj_[key]) ||
              targetObj_[key] === obj_[key]
            : // : extendedTypeof(targetObj_[key]) === extendedTypeof(obj_[key])
              targetObj_[key] === obj_[key]
        ) {
          addKeysToObject(r, [...currentPath, key], obj_[key]);
        } else {
          strictMatchFailed = true;
        }
      });
    }
  }

  _filter(object, targetObject, []);

  if (advancedRules?.strictFiltering === true && strictMatchFailed) {
    advancedRules?.strictMatchingFailedCallback?.();
    return advancedRules?.defaultReturnValue ?? undefined;
  }

  return r;
}
