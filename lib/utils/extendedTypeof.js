const { regex } = require(".");

/** @param {any} item @returns {"array" | "json" | "null" | "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function"} */
function extendedTypeof(item) {
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

module.exports = extendedTypeof;