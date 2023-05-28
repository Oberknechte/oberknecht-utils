"use strict";
exports.__esModule = true;
exports.convertToArray = void 0;
var recreate_1 = require("./recreate");
// export function convertToArray(arr: Array<any> | any, returnundefined?: boolean | any) {
function convertToArray(arr, returnundefined) {
    var arr_ = (0, recreate_1.recreate)(arr);
    if (!(arr_ !== null && arr_ !== void 0 ? arr_ : undefined))
        return (returnundefined ? undefined : []);
    return (!Array.isArray(arr_) ? [arr_] : arr_);
}
exports.convertToArray = convertToArray;
;
