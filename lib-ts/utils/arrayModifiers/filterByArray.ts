import {
  extendedType_TypesArray,
  extendedTypeof,
  extendedTypeofCustom,
} from "../extendedTypeof";
import { filterByJson } from "../jsonModifiers/filterByJSON";

export type advancedRulesArrayType = {
  filterStrict?: boolean; // only returns the array if all items match the target array, if false: partial matches are allowed (will remove items inbetween the allowed ones)
  strictMatchingFailedCallback?: () => void;
  defaultReturnValue?: Array<any>;
};

export function filterByArray(
  array: Array<any>,
  targetArray: Array<any>,
  useExtendedTypes?: boolean,
  advancedRules?: advancedRulesArrayType
) {
  let r: Array<any> = [];

  let strictMatchFailed = false;

  if (
    advancedRules?.filterStrict === true &&
    array.length !== targetArray.length
  ) {
    advancedRules?.strictMatchingFailedCallback?.();
    return advancedRules?.defaultReturnValue ?? undefined;
  }

  targetArray.forEach((targetItem, i) => {
    let item = array[i];
    if (!item) return (strictMatchFailed = true);

    if (
      useExtendedTypes &&
      extendedType_TypesArray.includes(targetItem as symbol)
    ) {
      if (extendedTypeofCustom(item) === targetItem) {
        r.push(item);
      } else {
        strictMatchFailed = true;
      }
    } else {
      if (extendedTypeof(targetItem) !== extendedTypeof(item))
        return (strictMatchFailed = true);

      switch (extendedTypeof(targetItem)) {
        case "json": {
          let filtered = filterByJson(item, targetItem, useExtendedTypes, {
            strictFiltering: advancedRules?.filterStrict,
            strictMatchingFailedCallback: () => {
              strictMatchFailed = true;
            },
          });
          if (filtered !== undefined) r.push(filtered);
          break;
        }

        case "array": {
          let filtered = filterByArray(item, targetItem, useExtendedTypes, {
            filterStrict: advancedRules?.filterStrict,
            strictMatchingFailedCallback: () => {
              strictMatchFailed = true;
            },
          });
          if (filtered !== undefined) r.push(filtered);
          break;
        }

        default: {
          if (
            useExtendedTypes
              ? targetItem === extendedTypeofCustom(item) || targetItem === item
              : // : extendedTypeof(targetItem) === extendedTypeof(item)
                targetItem === item
          ) {
            r.push(item);
          } else {
            strictMatchFailed = true;
          }
        }
      }
    }
  });

  if (advancedRules?.filterStrict === true && strictMatchFailed) {
    advancedRules?.strictMatchingFailedCallback?.();
    return advancedRules?.defaultReturnValue ?? undefined;
  }

  return r;
}
