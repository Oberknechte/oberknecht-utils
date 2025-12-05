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

export const extendedType_JSON = Symbol("json");
export const extendedType_Array = Symbol("array");
export const extendedType_Null = Symbol("null");
export const extendedType_Bigint = Symbol("bigint");
export const extendedType_Boolean = Symbol("boolean");
export const extendedType_Function = Symbol("function");
export const extendedType_Number = Symbol("number");
export const extendedType_String = Symbol("string");
export const extendedType_Symbol = Symbol("symbol");
export const extendedType_Undefined = Symbol("undefined");
export const extendedType_Object = Symbol("object");
export const extendedType_Any = Symbol("any");

export const extendedType_TypesArray = [
  extendedType_JSON,
  extendedType_Array,
  extendedType_Null,
  extendedType_Bigint,
  extendedType_Boolean,
  extendedType_Function,
  extendedType_Number,
  extendedType_String,
  extendedType_Symbol,
  extendedType_Undefined,
  extendedType_Object,
];

export function extendedTypeofCustom(item: any): typeof extendedType_TypesArray[number] | undefined {
  let type = typeof item;
  switch (type) {
    case "object": {
      if (Array.isArray(item)) return extendedType_Array;
      try {
        // try catch due to error when trying to convert circular structure in object to json
        // (Converting circular structure to JSON)
        if (regex.jsonreg().test(JSON.stringify(item)))
          return extendedType_JSON;
      } catch (e) {}
      if (item === null) return extendedType_Null;

      return extendedType_Object;
    }

    case "bigint":
      return extendedType_Bigint;

    case "boolean":
      return extendedType_Boolean;

    case "function":
      return extendedType_Function;

    case "number":
      return extendedType_Number;

    case "string":
      return extendedType_String;

    case "symbol":
      return extendedType_Symbol;

    case "undefined":
      return extendedType_Undefined;

    default:
      return undefined;
  }
}
