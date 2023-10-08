"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dissolveArray = void 0;
const convertToArray_1 = require("./convertToArray");
const extendedTypeof_1 = require("../extendedTypeof");
function dissolveArray(...arr) {
    let arr_ = (0, convertToArray_1.convertToArray)(arr, false);
    let r = [];
    function actualDissolveArray(a) {
        if ((0, extendedTypeof_1.extendedTypeof)(a) !== "array")
            r.push(a);
        else
            a.forEach((b) => actualDissolveArray(b));
    }
    arr_.forEach(actualDissolveArray);
    return r;
}
exports.dissolveArray = dissolveArray;
