"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.secondCase = void 0;
function secondCase(s) {
    let r = "";
    s?.split("")?.forEach((a, i) => (r += i % 2 === 0 ? a : a.toUpperCase()));
    return r;
}
exports.secondCase = secondCase;
