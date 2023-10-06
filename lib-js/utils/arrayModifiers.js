"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayModifiers = void 0;
const splice_1 = require("./arrayModifiers/splice");
const moveByIndex_1 = require("./arrayModifiers/moveByIndex");
const _1 = require(".");
class arrayModifiers {
    static splice = splice_1.splice;
    static moveByIndex = moveByIndex_1.moveByIndex;
    static removeDuplicates = _1.removeArrayDuplicates;
}
exports.arrayModifiers = arrayModifiers;
