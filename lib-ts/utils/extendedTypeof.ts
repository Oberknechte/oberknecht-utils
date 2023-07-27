import { regex } from "../variables/regex";
import { extendedTypes } from "../types/extendedTypes";

export function extendedTypeof(item: any): extendedTypes {
  let type = typeof item;
  switch (type) {
    case "object": {
      if (Array.isArray(item)) return "array";
      try {
        // try catch due to error when trying to convert circular structure in object to json
        // (Converting circular structure to JSON)
        if (regex.jsonreg().test(JSON.stringify(item))) return "json";
      } catch (e) {}
      if (item === null) return "null";
    }

    default:
      return type;
  }
}
