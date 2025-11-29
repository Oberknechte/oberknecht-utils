"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterByJson = void 0;
const extendedTypeof_1 = require("../extendedTypeof");
const addKeysToObject_1 = require("./addKeysToObject");
const filterByArray_1 = require("../arrayModifiers/filterByArray");
function filterByJson(object, targetObject, useExtendedTypes, advancedRules
// arrayFilterStrict?: boolean // only returns the array if all items match the target array, if false: partial matches are allowed (will remove items inbetween the allowed ones)
) {
    let r = {};
    let strictMatchFailed = false;
    function _filter(obj_, targetObj_, currentPath) {
        if (Object.keys(targetObj_).length === 0) {
            [extendedTypeof_1.extendedType_String, extendedTypeof_1.extendedType_Symbol].forEach((a) => {
                if (targetObj_[a] !== undefined) {
                    Object.keys(obj_).forEach((key) => {
                        if ((0, extendedTypeof_1.extendedTypeofCustom)(key) !== a)
                            return;
                        return _filter(obj_[key], targetObj_[a], [...currentPath, key]);
                    });
                }
            });
        }
        else {
            if (advancedRules?.strictFilteringByKeys === true &&
                Object.keys(obj_).sort().join("\u0000") !== Object.keys(targetObj_).sort().join("\u0000"))
                return (strictMatchFailed = true);
            Object.keys(targetObj_).forEach((key, i) => {
                let key_ = "";
                if (typeof key === "symbol") {
                    if ((0, extendedTypeof_1.extendedTypeofCustom)(obj_[key]) !== key) {
                        return (strictMatchFailed = true);
                    }
                    key_ = Object.keys(obj_)[i];
                }
                else if (obj_[key] === undefined) {
                    return (strictMatchFailed = true);
                }
                else {
                    key_ = key;
                }
                if (key_.length === 0)
                    return (strictMatchFailed = true);
                if ((0, extendedTypeof_1.extendedTypeof)(targetObj_[key]) === "json") {
                    if ((0, extendedTypeof_1.extendedTypeof)(obj_[key]) !== "json")
                        return (strictMatchFailed = true);
                    // addKeysToObject(r, [...currentPath, key], {});
                    _filter(obj_[key], targetObj_[key], [...currentPath, key]);
                }
                else if ((0, extendedTypeof_1.extendedTypeof)(targetObj_[key]) === "array") {
                    if ((0, extendedTypeof_1.extendedTypeof)(obj_[key]) !== "array")
                        return (strictMatchFailed = true);
                    let arrFilter = (0, filterByArray_1.filterByArray)(obj_[key], targetObj_[key], useExtendedTypes, {
                        filterStrict: advancedRules?.arrayStrictFiltering ?? false,
                        strictMatchingFailedCallback: () => {
                            strictMatchFailed = true;
                        },
                    });
                    if (arrFilter !== undefined)
                        (0, addKeysToObject_1.addKeysToObject)(r, [...currentPath, key], arrFilter);
                }
                else if (useExtendedTypes
                    ? targetObj_[key] === (0, extendedTypeof_1.extendedTypeofCustom)(obj_[key]) ||
                        targetObj_[key] === obj_[key]
                    : // : extendedTypeof(targetObj_[key]) === extendedTypeof(obj_[key])
                        targetObj_[key] === obj_[key]) {
                    (0, addKeysToObject_1.addKeysToObject)(r, [...currentPath, key], obj_[key]);
                }
                else {
                    strictMatchFailed = true;
                }
            });
        }
    }
    _filter(object, targetObject, []);
    if (advancedRules?.strictFiltering === true && strictMatchFailed) {
        advancedRules?.strictMatchingFailedCallback?.();
        return advancedRules?.defaultReturnValue ?? undefined;
    }
    return r;
}
exports.filterByJson = filterByJson;
