"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addKeysToObjectSync = void 0;
const convertToArray_1 = require("./convertToArray");
const recreate_1 = require("./recreate");
const extendedTypeof_1 = require("./extendedTypeof");
function addKeysToObjectSync(object, keypath, value) {
    let keypath_ = (0, convertToArray_1.convertToArray)(keypath, false);
    let object_ = (0, recreate_1.recreate)(object);
    let parentObj = object_;
    for (let i = 0; i < keypath_.length - 1; i++) {
        let key = keypath_[i];
        if (!(key in parentObj) || (0, extendedTypeof_1.extendedTypeof)(parentObj[key]) !== "json")
            parentObj[key] = {};
        parentObj = parentObj[key];
    }
    parentObj[keypath_.at(-1)] = value;
    return object_;
}
exports.addKeysToObjectSync = addKeysToObjectSync;
