"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extendedTypeof = void 0;
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
