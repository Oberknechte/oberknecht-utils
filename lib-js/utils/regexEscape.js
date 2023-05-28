"use strict";
exports.__esModule = true;
exports.regexEscape = void 0;
var recreate_1 = require("./recreate");
function regexEscape(s) {
    var r = (0, recreate_1.recreate)(s);
    var escapingRegex = ["\\", "/", "(", ")", "{", "}", "[", "]", "^", "$", ".", "*", "?", "+", "|"];
    escapingRegex.forEach(function (a) { return r = r.replaceAll(a, function (b) { return "\\".concat(b); }); });
    return r;
}
exports.regexEscape = regexEscape;
;
