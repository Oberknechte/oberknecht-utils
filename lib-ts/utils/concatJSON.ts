import { addKeysToObject, convertToArray, extendedTypeof } from ".";

export function concatJSON(arr: Record<string, any>[]) {
  let arr_ = convertToArray(arr);
  let r = {};
  arr_.forEach((a) => {
    function appendObj(obj, obj2) {
      Object.keys(obj2).forEach((b) => {
        if (
          obj[b] &&
          extendedTypeof(obj[b]) === "json" &&
          extendedTypeof(obj2[b]) === "json"
        )
          return appendObj(obj[b], obj2[b]);
        obj[b] = obj2[b];
      });
    }

    appendObj(r, a);
  });

  return r;
}
