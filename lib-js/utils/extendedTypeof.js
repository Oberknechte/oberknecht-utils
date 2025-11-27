"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extendedTypeofCustom = exports.extendedType_Object = exports.extendedType_Undefined = exports.extendedType_Symbol = exports.extendedType_String = exports.extendedType_Number = exports.extendedType_Function = exports.extendedType_Boolean = exports.extendedType_Bigint = exports.extendedType_Null = exports.extendedType_Array = exports.extendedType_JSON = exports.extendedTypeof = void 0;
const regex_1 = require("../variables/regex");
function extendedTypeof(item) {
    let type = typeof item;
    switch (type) {
        case "object": {
            if (Array.isArray(item))
                return "array";
            try {
                // try catch due to error when trying to convert circular structure in object to json
                // (Converting circular structure to JSON)
                if (regex_1.regex.jsonreg().test(JSON.stringify(item)))
                    return "json";
            }
            catch (e) { }
            if (item === null)
                return "null";
        }
        default:
            return type;
    }
}
exports.extendedTypeof = extendedTypeof;
exports.extendedType_JSON = Symbol("json");
exports.extendedType_Array = Symbol("array");
exports.extendedType_Null = Symbol("null");
exports.extendedType_Bigint = Symbol("bigint");
exports.extendedType_Boolean = Symbol("boolean");
exports.extendedType_Function = Symbol("function");
exports.extendedType_Number = Symbol("number");
exports.extendedType_String = Symbol("string");
exports.extendedType_Symbol = Symbol("symbol");
exports.extendedType_Undefined = Symbol("undefined");
exports.extendedType_Object = Symbol("object");
function extendedTypeofCustom(item) {
    let type = typeof item;
    switch (type) {
        case "object": {
            if (Array.isArray(item))
                return exports.extendedType_Array;
            try {
                // try catch due to error when trying to convert circular structure in object to json
                // (Converting circular structure to JSON)
                if (regex_1.regex.jsonreg().test(JSON.stringify(item)))
                    return exports.extendedType_JSON;
            }
            catch (e) { }
            if (item === null)
                return exports.extendedType_Null;
            return exports.extendedType_Object;
        }
        case "bigint":
            return exports.extendedType_Bigint;
        case "boolean":
            return exports.extendedType_Boolean;
        case "function":
            return exports.extendedType_Function;
        case "number":
            return exports.extendedType_Number;
        case "string":
            return exports.extendedType_String;
        case "symbol":
            return exports.extendedType_Symbol;
        case "undefined":
            return exports.extendedType_Undefined;
        default:
            return undefined;
    }
}
exports.extendedTypeofCustom = extendedTypeofCustom;
