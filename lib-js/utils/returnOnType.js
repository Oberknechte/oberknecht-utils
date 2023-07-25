"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnOnType = void 0;
const extendedTypeof_1 = require("./extendedTypeof");
const convertToArray_1 = require("./convertToArray");
function returnOnType(input, types_, returnIfType, returnElse) {
    let types = (0, convertToArray_1.convertToArray)(types_, false);
    if (!types.includes((0, extendedTypeof_1.extendedTypeof)(input)))
        return returnIfType;
    else
        return returnElse;
}
exports.returnOnType = returnOnType;
