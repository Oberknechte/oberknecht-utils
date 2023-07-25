"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pad2 = void 0;
function pad2(n) {
    return `${parseInt(`${n}`) <= 9 ? "0" : ""}${n}`;
}
exports.pad2 = pad2;
