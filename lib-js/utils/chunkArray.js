"use strict";
exports.__esModule = true;
exports.chunkArray = void 0;
var extendedTypeof_1 = require("./extendedTypeof");
/** @see https://github.com/NuroC/moomoo-in-depth/tree/main/protocol#chunk-arrays */
function chunkArray(arr, size) {
    if ((0, extendedTypeof_1.extendedTypeof)(arr) !== "array")
        return [];
    size = (size !== null && size !== void 0 ? size : 10);
    var r = [];
    for (var i = 0; i < arr.length; i += size)
        r.push(arr.slice(i, i + size));
    return r;
}
exports.chunkArray = chunkArray;
;
