import { regex } from "../variables/regex";

export function extendedTypeof(item: any): "array" | "json" | "null" | "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" {
    let type = typeof item;
    switch (type) {
        case "object": {
            if (Array.isArray(item)) return "array";
            if (regex.jsonreg().test(JSON.stringify(item))) return "json";
            if (item === null) return "null";
        };

        default: return type;
    };
};