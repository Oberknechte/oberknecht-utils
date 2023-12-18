import { convertToArray, extendedTypeof } from "..";
import { extendedTypes } from "../../types/extendedTypes";

export function filterByTypes(
  object: Record<string, any>,
  typeObject: Record<string, extendedTypes | extendedTypes[]>,
  filterNotInTypeObject?: boolean
) {
  let object_ = {};
  Object.keys(object).forEach((a) => {
    if (!typeObject[a] && filterNotInTypeObject) return;
    if (
      typeObject[a] &&
      !convertToArray(typeObject[a]).includes(extendedTypeof(object[a]))
    )
      return;
    object_[a] = object[a];
  });
  return object_;
}
