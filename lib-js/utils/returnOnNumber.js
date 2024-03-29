"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnOnNumber = void 0;
const convertToArray_1 = require("./arrayModifiers/convertToArray");
const extendedTypeof_1 = require("./extendedTypeof");
const isNullUndefined_1 = require("./isNullUndefined");
function returnOnNumber(input, targetNumber, returnOnGreater, returnOnGreaterEquals, returnOnSmaller, returnOnSmallerEquals, returnDefault) {
    if (["null", "undefined"].includes((0, extendedTypeof_1.extendedTypeof)(input)))
        return undefined;
    targetNumber = (0, isNullUndefined_1.isNullUndefined)((0, extendedTypeof_1.extendedTypeof)(targetNumber))
        ? 2
        : targetNumber;
    let parsedSearchNumber;
    switch ((0, extendedTypeof_1.extendedTypeof)(input)) {
        case "string":
        case "array":
            parsedSearchNumber = (0, convertToArray_1.convertToArray)(input).length;
            break;
        case "json":
            parsedSearchNumber = Object.keys(input).length;
            break;
        case "number":
        case "bigint":
            parsedSearchNumber = input;
            break;
        default:
            return undefined;
    }
    if (!(0, isNullUndefined_1.isNullUndefined)(returnOnGreater) && parsedSearchNumber > targetNumber)
        return returnOnGreater;
    if (!(0, isNullUndefined_1.isNullUndefined)(returnOnGreaterEquals) &&
        parsedSearchNumber >= targetNumber)
        return returnOnGreaterEquals;
    if (!(0, isNullUndefined_1.isNullUndefined)(returnOnSmaller) && parsedSearchNumber < targetNumber)
        return returnOnSmaller;
    if (!(0, isNullUndefined_1.isNullUndefined)(returnOnSmallerEquals) &&
        parsedSearchNumber <= targetNumber)
        return returnOnSmallerEquals;
    return !(0, isNullUndefined_1.isNullUndefined)(returnDefault) ? returnDefault : "";
}
exports.returnOnNumber = returnOnNumber;
