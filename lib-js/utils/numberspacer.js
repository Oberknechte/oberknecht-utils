"use strict";
exports.__esModule = true;
exports.numberspacer = void 0;
function numberspacer(n, replacer) {
    var _a, _b;
    if (!((_a = (n !== null && n !== void 0 ? n : undefined)) === null || _a === void 0 ? void 0 : _a.toString()) || !["number", "string"].includes(typeof n))
        return undefined;
    return (_b = n.toString()) === null || _b === void 0 ? void 0 : _b.replace(/\B(?=(\d{3})+(?!\d))/g, replacer || " ");
}
exports.numberspacer = numberspacer;
;
