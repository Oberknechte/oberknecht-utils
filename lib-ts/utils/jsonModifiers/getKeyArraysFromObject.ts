import { getKeyArraysFromObjectReturn } from "../../types/getKeyArraysFromObject";
import { extendedTypeof } from "..";

export function getKeyArraysFromObject(
  object: Record<string, any>
): getKeyArraysFromObjectReturn {
  let r: getKeyArraysFromObjectReturn = [];

  function go(o2: Record<string, any>, arr: string[]) {
    Object.keys(o2 ?? {})?.forEach((a) => {
      if (
        extendedTypeof(o2[a]) === "json" &&
        (Object.keys(o2[a]).length ?? 0) > 0
      ) {
        go(o2[a], [...arr, a]);
      } else {
        r.push({
          path: [...arr, a],
          value: o2[a],
        });
      }
    });
  }

  go(object, []);
  return r;
}
