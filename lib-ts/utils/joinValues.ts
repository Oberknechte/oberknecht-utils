import {
  addKeysToObject,
  convertToArray,
  extendedTypeof,
  getKeyArraysFromObject,
} from ".";

export function joinValues(values: any[], typesOverride?: boolean) {
  let values_ = convertToArray(values);
  let r = values_[0];
  values_.slice(1).forEach((value) => {
    if (!typesOverride && extendedTypeof(value) !== extendedTypeof(r)) return;
    if (extendedTypeof(value) !== extendedTypeof(r)) return (r = value);
    switch (extendedTypeof(value)) {
      case "json": {
        let jsonpaths = getKeyArraysFromObject(value);
        jsonpaths.forEach((a) => {
          addKeysToObject(r, a.path, a.value);
        });

        break;
      }

      case "array": {
        r.push(...convertToArray(value, false));
        break;
      }

      case "string":
      case "number":
      case "bigint": {
        r += value;
        break;
      }
    }
  });

  return r;
}
