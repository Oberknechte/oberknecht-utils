"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chunkArray = void 0;
const extendedTypeof_1 = require("./extendedTypeof");
/** @see https://github.com/NuroC/moomoo-in-depth/tree/main/protocol#chunk-arrays */
function chunkArray(arr, size) {
    if ((0, extendedTypeof_1.extendedTypeof)(arr) !== "array")
        return [];
    size = (size ?? 10);
    let r = [];
    for (let i = 0; i < arr.length; i += size)
        r.push(arr.slice(i, i + size));
    return r;
}
exports.chunkArray = chunkArray;
;
