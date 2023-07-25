import { regex } from "../variables/regex";
import { extendedTypes } from "../types/extendedTypes";

export function extendedTypeof(item: any): extendedTypes {
  let type = typeof item;
  switch (type) {
    case "object": {
      if (Array.isArray(item)) return "array";
      if (regex.jsonreg().test(JSON.stringify(item))) return "json";
      if (item === null) return "null";
    }

    default:
      return type;
  }
}
