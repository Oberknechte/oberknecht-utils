"use strict";
exports.__esModule = true;
exports.firstCap = void 0;
var extendedTypeof_1 = require("./extendedTypeof");
function firstCap(s) {
    var _a;
    if (!["string", "number"].includes((0, extendedTypeof_1.extendedTypeof)(s)))
        return undefined;
    return (s.length > 0 ? ((_a = s.toString()) === null || _a === void 0 ? void 0 : _a[0].toUpperCase()) + s.toString().slice(1) : "");
}
exports.firstCap = firstCap;
;
