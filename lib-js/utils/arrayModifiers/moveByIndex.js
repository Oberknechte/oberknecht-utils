"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveByIndex = void 0;
const __1 = require("../");
const splice_1 = require("./splice");
function moveByIndex(arr, indexFirst, indexEnd, moveNumber) {
    if (!arr ||
        (0, __1.isNullUndefined)(indexFirst) ||
        ((0, __1.isNullUndefined)(indexEnd) && (0, __1.isNullUndefined)(moveNumber)))
        return arr;
    if ((0, __1.isNullUndefined)(indexEnd) && moveNumber)
        indexEnd = indexFirst + moveNumber;
    let isPositiveDirection = indexEnd > indexFirst;
    let r = (0, __1.recreate)(arr);
    let elem = arr[indexFirst];
    let arr_ = (0, splice_1.splice)(r, indexFirst);
    r = [
        ...arr_.slice(0, isPositiveDirection ? indexFirst + 1 : indexEnd),
        elem,
        ...arr_.slice(indexEnd),
    ];
    return r;
}
exports.moveByIndex = moveByIndex;
