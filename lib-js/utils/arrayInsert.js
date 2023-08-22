"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayInsert = void 0;
const _1 = require("./");
class arrayInsert {
    static insertBefore = (arr, beforeElement, elem) => {
        let r = [];
        if (!arr || (0, _1.extendedTypeof)(arr) !== "array")
            return r;
        if (!beforeElement || arr.indexOf(beforeElement) === -1)
            return [...r, elem];
        let beforeIndex = arr.indexOf(beforeElement);
        return [...arr.slice(0, beforeIndex), elem, ...arr.slice(beforeIndex)];
    };
    static insertAfter = (arr, afterElement, elem) => {
        let r = [];
        if (!arr || (0, _1.extendedTypeof)(arr) !== "array")
            return r;
        if (!afterElement || arr.indexOf(afterElement) === -1)
            return [...r, elem];
        let afterIndex = arr.indexOf(afterElement);
        return [
            ...arr.slice(0, afterIndex + 1),
            elem,
            ...arr.slice(afterIndex + 1),
        ];
    };
    static insertBeforeIndex = (arr, beforeIndex, elem) => {
        let r = [];
        if (!arr || (0, _1.extendedTypeof)(arr) !== "array")
            return r;
        return [...arr.slice(0, beforeIndex), elem, ...arr.slice(beforeIndex)];
    };
    static insertAfterIndex = (arr, afterIndex, elem) => {
        let r = [];
        if (!arr || (0, _1.extendedTypeof)(arr) !== "array")
            return r;
        return [
            ...arr.slice(0, afterIndex + 1),
            elem,
            ...arr.slice(afterIndex + 1),
        ];
    };
}
exports.arrayInsert = arrayInsert;
