"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToArray = void 0;
const recreate_1 = require("./recreate");
// export function convertToArray(arr: Array<any> | any, returnundefined?: boolean | any) {
function convertToArray(arr, returnundefined) {
    let arr_ = (0, recreate_1.recreate)(arr);
    if (!(arr_ ?? undefined))
        return (returnundefined ? undefined : []);
    return (!Array.isArray(arr_) ? [arr_] : arr_);
}
exports.convertToArray = convertToArray;
;
