"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = void 0;
const __1 = require("..");
function remove(arr, removeElem, noRecreate) {
    if (!arr || !removeElem)
        return arr;
    let arr_ = noRecreate ? arr : (0, __1.recreate)(arr);
    return arr_.filter((a) => a !== removeElem);
}
exports.remove = remove;
