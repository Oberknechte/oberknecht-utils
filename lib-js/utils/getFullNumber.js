"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFullNumber = void 0;
function getFullNumber(n) {
    if (!n || typeof n !== "number")
        return -1;
    if (Math.trunc(n) !== n)
        return Math.trunc(n) + 1;
    return n;
}
exports.getFullNumber = getFullNumber;
