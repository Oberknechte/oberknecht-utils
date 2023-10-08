"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addAppendKeysToObject = void 0;
const __1 = require("..");
function addAppendKeysToObject(object, keys, value) {
    let object_ = object;
    let keys_ = (0, __1.convertToArray)(keys, false);
    let oldvalue = (0, __1.getKeyFromObject)(object_, keys_);
    let newvalue = oldvalue ?? value;
    switch ((0, __1.extendedTypeof)(oldvalue)) {
        case "json": {
            let jsonpaths = (0, __1.getKeyArraysFromObject)(value);
            jsonpaths.forEach((a) => {
                (0, __1.addKeysToObject)(newvalue, a.path, a.value);
            });
            break;
        }
        case "array": {
            newvalue.push(...(0, __1.convertToArray)(value, false));
            break;
        }
        case "string":
        case "number":
        case "bigint": {
            newvalue += value;
            break;
        }
    }
    (0, __1.addKeysToObject)(object_, keys_, newvalue);
    return object_;
}
exports.addAppendKeysToObject = addAppendKeysToObject;
