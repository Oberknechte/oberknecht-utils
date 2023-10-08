"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concatJSON = void 0;
const __1 = require("..");
function concatJSON(arr) {
    let arr_ = (0, __1.convertToArray)(arr);
    let r = {};
    arr_.forEach((a) => {
        function appendObj(obj, obj2) {
            Object.keys(obj2).forEach((b) => {
                if (obj[b] &&
                    (0, __1.extendedTypeof)(obj[b]) === "json" &&
                    (0, __1.extendedTypeof)(obj2[b]) === "json")
                    return appendObj(obj[b], obj2[b]);
                obj[b] = obj2[b];
            });
        }
        appendObj(r, a);
    });
    return r;
}
exports.concatJSON = concatJSON;
