import {
  convertToArray,
  extendedTypeof,
  isNullUndefined,
  joinValues,
} from "..";
import { extendedTypes } from "../../types/extendedTypes";

export function concatJSON(
  arr: Record<string, any>[],
  addAppendTypes?: true | extendedTypes | extendedTypes[],
  typesOverride?: boolean,
) {
  let arr_ = convertToArray(arr);
  let r = {};
  let addAppendTypes_ = convertToArray(addAppendTypes);
  arr_.forEach((a) => {
    function appendObj(obj, obj2) {
      Object.keys(obj2).forEach((b) => {
        if (
          extendedTypeof(obj[b]) === "json" &&
          extendedTypeof(obj2[b]) === "json"
        )
          return appendObj(obj[b], obj2[b]);

        if (
          !isNullUndefined(addAppendTypes) &&
          extendedTypeof(obj[b]) === extendedTypeof(obj2[b]) &&
          (addAppendTypes === true ||
            addAppendTypes_.includes(extendedTypeof(obj[b])))
        )
          return (obj[b] = joinValues([obj[b], obj2[b]], typesOverride));

        obj[b] = obj2[b];
      });
    }

    appendObj(r, a);
  });

  return r;
}
