"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unchunkArray = void 0;
const extendedTypeof_1 = require("./extendedTypeof");
/** @see https://github.com/NuroC/moomoo-in-depth/tree/main/protocol#unchunk-arrays */
function unchunkArray(arr) {
    if ((0, extendedTypeof_1.extendedTypeof)(arr) !== "array")
        return [];
    let r = [];
    for (let i = 0; i < arr.length; i++)
        r = r.concat(arr[i]);
    return r;
}
exports.unchunkArray = unchunkArray;
;
