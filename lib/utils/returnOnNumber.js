const extendedTypeof = require("./extendedTypeof");
const isNullUndefined = require("./isNullUndefined");

/** @param {string | Array | Object | number | bigint} input @param {Number} targetNumber @param {any} returnOnGreater @param {any} returnOnGreaterEquals @param {any} returnOnSmaller @param {any} returnOnSmallerEquals @param {any} returnDefault */
function returnOnNumber(input, targetNumber, returnOnGreater, returnOnGreaterEquals, returnOnSmaller, returnOnSmallerEquals, returnDefault) {
    if (isNullUndefined(extendedTypeof(input))) return undefined;
    targetNumber = (isNullUndefined(extendedTypeof(targetNumber)) ? 2 : targetNumber);

    let parsedSearchNumber;
    switch (extendedTypeof(input)) {
        case "string":
        case "array": parsedSearchNumber = input.length; break;
        case "json": parsedSearchNumber = Object.keys(input).length; break;
        case "number":
        case "bigint": parsedSearchNumber = input; break;
        default: return undefined;
    };

    if (!isNullUndefined(returnOnGreater) && (parsedSearchNumber > targetNumber)) return returnOnGreater;
    if (!isNullUndefined(returnOnGreaterEquals) && (parsedSearchNumber >= targetNumber)) return returnOnGreaterEquals;
    if (!isNullUndefined(returnOnSmaller) && (parsedSearchNumber < targetNumber)) return returnOnSmaller;
    if (!isNullUndefined(returnOnSmallerEquals) && (parsedSearchNumber <= targetNumber)) return returnOnSmallerEquals;

    return (!isNullUndefined(returnDefault) ? returnDefault : "");
};

module.exports = returnOnNumber;