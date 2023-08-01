"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeArrayDuplicates = void 0;
const _1 = require("./");
function removeArrayDuplicates(arr) {
    let r = [];
    (0, _1.convertToArray)(arr, false).forEach((a) => {
        if (!r.includes(a))
            r.push(a);
    });
    return r;
}
exports.removeArrayDuplicates = removeArrayDuplicates;
