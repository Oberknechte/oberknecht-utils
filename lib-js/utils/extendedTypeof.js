"use strict";
exports.__esModule = true;
exports.extendedTypeof = void 0;
var regex_1 = require("../variables/regex");
function extendedTypeof(item) {
    var type = typeof item;
    switch (type) {
        case "object":
            {
                if (Array.isArray(item))
                    return "array";
                if (regex_1.regex.jsonreg().test(JSON.stringify(item)))
                    return "json";
                if (item === null)
                    return "null";
            }
            ;
        default: return type;
    }
    ;
}
exports.extendedTypeof = extendedTypeof;
;
