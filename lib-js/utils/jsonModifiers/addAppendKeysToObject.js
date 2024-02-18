"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addAppendKeysToObject = void 0;
const __1 = require("..");
function addAppendKeysToObject(object, keys, value) {
    let object_ = object;
    let keys_ = (0, __1.convertToArray)(keys, false);
    let oldvalue = (0, __1.getKeyFromObject)(object_, keys_);
    let newvalue = oldvalue ?? value;
    newvalue = (0, __1.joinValues)([newvalue, value], true);
    (0, __1.addKeysToObject)(object_, keys_, newvalue);
    return object_;
}
exports.addAppendKeysToObject = addAppendKeysToObject;
