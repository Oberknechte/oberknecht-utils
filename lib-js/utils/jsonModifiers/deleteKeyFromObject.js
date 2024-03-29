"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteKeyFromObject = void 0;
const __1 = require("..");
function deleteKeyFromObject(object, keys, throwErr) {
    let object_ = (0, __1.recreate)(object);
    let keys_ = (0, __1.convertToArray)(keys, false);
    let parentObj = object_;
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
    return object_;
}
exports.deleteKeyFromObject = deleteKeyFromObject;
