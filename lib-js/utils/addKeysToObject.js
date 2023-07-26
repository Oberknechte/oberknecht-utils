"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addKeysToObject = void 0;
const _1 = require(".");
function addKeysToObject(object, keypath, value) {
    let object_ = object;
    let keypath_ = (0, _1.convertToArray)(keypath, false);
    let parentObj = object_;
    for (let i = 0; i < keypath_.length - 1; i++) {
        let key = keypath_[i];
        if (!(key in parentObj) || (0, _1.extendedTypeof)(parentObj[key]) !== "json")
            parentObj[key] = {};
        parentObj = parentObj[key];
    }
    parentObj[keypath_.at(-1)] = value;
    return object_;
}
exports.addKeysToObject = addKeysToObject;
