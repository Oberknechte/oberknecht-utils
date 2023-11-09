"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToArray = void 0;
const __1 = require("..");
const recreate_1 = require("../recreate");
function convertToArray(arr, returnundefined, noRecreate) {
    let arr_ = !noRecreate ? (0, recreate_1.recreate)(arr) : arr;
    if ((0, __1.isNullUndefined)(arr_))
        return returnundefined ? undefined : [];
    return !Array.isArray(arr_) ? [arr_] : arr_;
}
exports.convertToArray = convertToArray;
