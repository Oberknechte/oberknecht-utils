"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeArrayDuplicates = void 0;
const __1 = require("..");
function removeArrayDuplicates(arr) {
    let r = [];
    (0, __1.convertToArray)(arr, false).forEach((a) => {
        if (!r.includes(a))
            r.push(a);
    });
    return r;
}
exports.removeArrayDuplicates = removeArrayDuplicates;
