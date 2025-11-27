"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterByJson = void 0;
const extendedTypeof_1 = require("../extendedTypeof");
const addKeysToObject_1 = require("./addKeysToObject");
function filterByJson(object, targetObject, useExtendedTypes) {
    let r = {};
    function _filter(obj_, targetObj_, currentPath) {
        if (Object.keys(targetObj_).length === 0) {
            [extendedTypeof_1.extendedType_String, extendedTypeof_1.extendedType_Symbol].forEach((a) => {
                if (targetObj_[a] !== undefined) {
                    Object.keys(obj_).forEach((key) => {
                        if ((0, extendedTypeof_1.extendedTypeofCustom)(key) !== a)
                            return;
                        _filter(obj_[key], targetObj_[a], [...currentPath, key]);
                    });
                }
            });
        }
        else {
            Object.keys(targetObj_).forEach((key, i) => {
                let key_ = "";
                if (typeof key === "symbol") {
                    if ((0, extendedTypeof_1.extendedTypeofCustom)(obj_[key]) !== key)
                        return;
                    key_ = Object.keys(obj_)[i];
                }
                else if (obj_[key] === undefined) {
                    return;
                }
                else {
                    key_ = key;
                }
                if (key_.length === 0)
                    return console.log("length 0");
                if ((0, extendedTypeof_1.extendedTypeof)(targetObj_[key]) === "json") {
                    if ((0, extendedTypeof_1.extendedTypeof)(obj_[key]) !== "json")
                        return;
                    (0, addKeysToObject_1.addKeysToObject)(r, [...currentPath, key], Array.isArray(obj_[key]) ? [] : {});
                    _filter(obj_[key], targetObj_[key], [...currentPath, key]);
                }
                else if (useExtendedTypes
                    ? targetObj_[key] === (0, extendedTypeof_1.extendedTypeofCustom)(obj_[key])
                    : (0, extendedTypeof_1.extendedTypeof)(targetObj_[key]) === (0, extendedTypeof_1.extendedTypeof)(obj_[key])) {
                    (0, addKeysToObject_1.addKeysToObject)(r, [...currentPath, key], obj_[key]);
                }
            });
        }
    }
    _filter(object, targetObject, []);
    return r;
}
exports.filterByJson = filterByJson;
/*

Ex1:

const obj = { a: { b1: { c: 1 }, b2: 2 } };

const obj2 = { a: { b1: { c: extendedType_Number } } };

console.log(filterByJson(obj, obj2, true));

Output: { a: { b1: { c: 1 } } }

--------

Ex2:

const obj = { a: { b1: { c: 1 }, b2: 2 } };

const obj2 = { a: { b1: extendedType_JSON } };

console.log(filterByJson(obj, obj2, true));

Output: { a: { b1: { c: 1 } } }

*/
