"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getKeyArraysFromObject = void 0;
const __1 = require("..");
function getKeyArraysFromObject(object) {
    let r = [];
    function go(o2, arr) {
        Object.keys(o2 ?? {})?.forEach((a) => {
            if ((0, __1.extendedTypeof)(o2[a]) === "json" &&
                (Object.keys(o2[a]).length ?? 0) > 0) {
                go(o2[a], [...arr, a]);
            }
            else {
                r.push({
                    path: [...arr, a],
                    value: o2[a],
                });
            }
        });
    }
    go(object, []);
    return r;
}
exports.getKeyArraysFromObject = getKeyArraysFromObject;
