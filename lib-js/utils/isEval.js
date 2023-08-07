"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEval = void 0;
const isNullUndefined_1 = require("./isNullUndefined");
function isEval(n) {
    if ((0, isNullUndefined_1.isNullUndefined)(n))
        return NaN;
    return Math.trunc(n / 2) !== n / 2;
}
exports.isEval = isEval;
