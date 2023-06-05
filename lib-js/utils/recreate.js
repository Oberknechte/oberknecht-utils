"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recreate = void 0;
const regex_1 = require("../variables/regex");
function recreate(inp) {
    switch (typeof inp) {
        case "boolean": return (inp === true);
        case "number": return parseInt(`${inp}`);
        case "object":
            {
                if (Array.isArray(inp))
                    return [...inp];
                if (regex_1.regex.jsonreg().test(JSON.stringify(inp)))
                    return { ...inp };
                return Object.assign({}, inp);
            }
            ;
        case "string": return `${inp}`;
        case "undefined": return undefined;
    }
    ;
}
exports.recreate = recreate;
;
