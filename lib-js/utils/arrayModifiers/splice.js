"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splice = void 0;
const __1 = require("..");
function splice(arr, index, deleteCount) {
    if (!arr || !index || !arr[index])
        return arr;
    let arr_ = (0, __1.recreate)(arr);
    arr_.splice(index, deleteCount ?? 1);
    return arr_;
}
exports.splice = splice;
