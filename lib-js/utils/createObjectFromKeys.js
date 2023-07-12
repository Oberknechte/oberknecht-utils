"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createObjectFromKeys = void 0;
const _1 = require(".");
function createObjectFromKeys(keys, value) {
    let o = {};
    let keys_ = (0, _1.convertToArray)(keys, false);
    function actualAppend(i, o2) {
        o2[keys_[i]] = {};
        if (i < keys_.length - 1)
            actualAppend(i + 1, o2[keys_[i]]);
        else
            o2[keys_[i]] = value;
    }
    actualAppend(0, o);
    return o;
}
exports.createObjectFromKeys = createObjectFromKeys;
