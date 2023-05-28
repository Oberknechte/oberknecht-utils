"use strict";
exports.__esModule = true;
exports.isNaM = void 0;
function isNaM(s) {
    if (!(s !== null && s !== void 0 ? s : undefined))
        return undefined;
    return /\W/gi.test(s);
}
exports.isNaM = isNaM;
;
