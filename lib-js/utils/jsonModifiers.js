"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonModifiers = void 0;
const _1 = require(".");
const deleteKeysFromJSON_1 = require("./jsonModifiers/deleteKeysFromJSON");
const renameKey_1 = require("./jsonModifiers/renameKey");
class jsonModifiers {
    static addAppendKeysToObject = _1.addAppendKeysToObject;
    static addKeysToObject = _1.addKeysToObject;
    static concatJSON = _1.concatJSON;
    static createObjectFromKeys = _1.createObjectFromKeys;
    static deleteKeyFromObject = _1.deleteKeyFromObject;
    static getAllObjectKeysTree = _1.getAllObjectKeysTree;
    static getByObjectFromTree = _1.getByObjectFromTree;
    static getKeyFromObject = _1.getKeyFromObject;
    static deleteKeysFromJSON = deleteKeysFromJSON_1.deleteKeysFromJSON;
    static renameKey = renameKey_1.renameKey;
}
exports.jsonModifiers = jsonModifiers;
