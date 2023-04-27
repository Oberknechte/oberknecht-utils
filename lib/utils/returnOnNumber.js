const extendedTypeof = require("./extendedTypeof");

/** @param {string | Array | Object | number | bigint} input @param {Number} targetNumber @param {any} returnOnGreater @param {any} returnOnGreaterEquals @param {any} returnOnSmaller @param {any} returnOnSmallerEquals @param {any} returnDefault */
function returnOnNumber(input, targetNumber, returnOnGreater, returnOnGreaterEquals, returnOnSmaller, returnOnSmallerEquals, returnDefault) {
    if (["null", "undefined"].includes(extendedTypeof(input))) return undefined;
    targetNumber = (["null", "undefined"].includes(extendedTypeof(targetNumber)) ? 2 : targetNumber);

    let parsedSearchNumber;
    switch (extendedTypeof(input)) {
        case "string":
        case "array": parsedSearchNumber = input.length; break;
        case "json": parsedSearchNumber = Object.keys(input).length; break;
        case "number":
        case "bigint": parsedSearchNumber = input; break;
        default: return undefined;
    };

    if (returnOnGreater && (parsedSearchNumber > targetNumber)) return returnOnGreater;
    if (returnOnGreaterEquals && (parsedSearchNumber >= targetNumber)) return returnOnGreaterEquals;
    if (returnOnSmaller && (parsedSearchNumber < targetNumber)) return returnOnSmaller;
    if (returnOnSmallerEquals && (parsedSearchNumber <= targetNumber)) return returnOnSmallerEquals;

    return (returnDefault ?? "");
};

module.exports = returnOnNumber;