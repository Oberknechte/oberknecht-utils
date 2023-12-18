"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterByTypes = void 0;
const __1 = require("..");
function filterByTypes(object, typeObject, filterNotInTypeObject) {
    let object_ = {};
    Object.keys(object).forEach((a) => {
        if (!typeObject[a] && filterNotInTypeObject)
            return;
        if (typeObject[a] &&
            !(0, __1.convertToArray)(typeObject[a]).includes((0, __1.extendedTypeof)(object[a])))
            return;
        object_[a] = object[a];
    });
    return object_;
}
exports.filterByTypes = filterByTypes;
