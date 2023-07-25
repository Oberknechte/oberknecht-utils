"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNaM = void 0;
function isNaM(s) {
    if (!(s ?? undefined))
        return undefined;
    return /\W/gi.test(s);
}
exports.isNaM = isNaM;
