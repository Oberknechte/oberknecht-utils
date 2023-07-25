"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstCap = void 0;
const extendedTypeof_1 = require("./extendedTypeof");
function firstCap(s) {
    if (!["string", "number"].includes((0, extendedTypeof_1.extendedTypeof)(s)))
        return undefined;
    return s.length > 0
        ? s.toString()?.[0].toUpperCase() + s.toString().slice(1)
        : "";
}
exports.firstCap = firstCap;
