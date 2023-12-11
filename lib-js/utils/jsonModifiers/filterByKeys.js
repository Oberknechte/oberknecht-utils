"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterByKeys = void 0;
const __1 = require("../");
function filterByKeys(object, allowedKeys, disallowedKeys) {
    let r = {};
    if (allowedKeys)
        Object.keys(object)
            .filter((a) => (0, __1.convertToArray)(allowedKeys, false).includes(a))
            .forEach((a) => (r[a] = object[a]));
    if (disallowedKeys) {
        if (!allowedKeys)
            r = (0, __1.recreate)(object);
        Object.keys(r)
            .filter((a) => disallowedKeys.includes(a))
            .forEach((a) => delete r[a]);
    }
    return r;
}
exports.filterByKeys = filterByKeys;
