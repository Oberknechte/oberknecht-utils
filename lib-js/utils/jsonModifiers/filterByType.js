"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterByType = void 0;
function filterByType(object, typeObject, filterNotInTypeObject) {
    let object_ = {};
    Object.keys(object).forEach((a) => {
        if (!typeObject[a] && filterNotInTypeObject)
            return;
        if (typeof object[a] !== typeObject[a])
            return;
        object_[a] = object[a];
    });
    return object_;
}
exports.filterByType = filterByType;
