"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteKeyFromObject = void 0;
const _1 = require(".");
function deleteKeyFromObject(object, keys, throwErr) {
    let keys_ = (0, _1.convertToArray)(keys, false);
    let parentObj = object;
    for (let i = 0; i < keys_.length - 1; i++) {
        if (!(keys_[i] in parentObj)) {
            let err = Error(`key ${keys_[i]} not in object`);
            if (throwErr)
                throw err;
            return undefined;
        }
        else {
            parentObj = parentObj[keys_[i]];
        }
    }
    let delkey = keys_[keys_.length - 1];
    delete parentObj[delkey];
    return object;
}
exports.deleteKeyFromObject = deleteKeyFromObject;
