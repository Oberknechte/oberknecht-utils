"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteKeysFromJSON = void 0;
const convertToArray_1 = require("../arrayModifiers/convertToArray");
const deleteKeyFromObject_1 = require("./deleteKeyFromObject");
const extendedTypeof_1 = require("../extendedTypeof");
function deleteKeysFromJSON(o, keys) {
    if ((0, extendedTypeof_1.extendedTypeof)(o) !== "json")
        return o;
    (0, convertToArray_1.convertToArray)(keys, false).forEach((a) => {
        (0, deleteKeyFromObject_1.deleteKeyFromObject)(o, a);
    });
    return o;
}
exports.deleteKeysFromJSON = deleteKeysFromJSON;
