"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getKeyFromObject = void 0;
const __1 = require("..");
function getKeyFromObject(object, keys, throwErr, noRecreate) {
    let keys_ = (0, __1.convertToArray)(keys, false, noRecreate);
    let value = object;
    for (let i = 0; i < keys_.length; i++) {
        if (value.hasOwnProperty(keys_[i])) {
            value = value[keys_[i]];
        }
        else {
            let err = Error(`key ${keys_[i]} not in value`);
            if (throwErr)
                throw err;
            return undefined;
        }
    }
    return value;
}
exports.getKeyFromObject = getKeyFromObject;
