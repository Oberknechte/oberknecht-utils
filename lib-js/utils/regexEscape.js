"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regexEscape = void 0;
const recreate_1 = require("./recreate");
function regexEscape(s) {
    let r = (0, recreate_1.recreate)(s);
    let escapingRegex = ["\\", "/", "(", ")", "{", "}", "[", "]", "^", "$", ".", "*", "?", "+", "|"];
    escapingRegex.forEach(a => r = r.replaceAll(a, b => `\\${b}`));
    return r;
}
exports.regexEscape = regexEscape;
;
