"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeAtIndex = void 0;
const __1 = require("../");
function removeAtIndex(arr, index) {
    if (!arr || !index || !arr[index])
        return arr;
    let arr_ = (0, __1.recreate)(arr);
    arr_.splice(index, 1);
    return arr_;
}
exports.removeAtIndex = removeAtIndex;
