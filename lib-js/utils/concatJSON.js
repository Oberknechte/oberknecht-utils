"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concatJSON = void 0;
function concatJSON(arr) {
    let r = {};
    arr.forEach((a) => {
        Object.keys(a).forEach((b) => {
            r[b] = a[b];
        });
    });
    return r;
}
exports.concatJSON = concatJSON;
