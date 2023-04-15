const extendedTypeof = require("./extendedTypeof");

/** @param {Array} arr @param {Number} size @returns {Array} @default size 10 @see https://github.com/NuroC/moomoo-in-depth/tree/main/protocol#chunk-arrays */
function chunkArray(arr, size) {
    if (extendedTypeof(arr) !== "array") return undefined;

    size = (size ?? 10);
    let r = [];
    for (let i = 0; i < arr.length; i += size) r.push(arr.slice(i, i + size));
    return r;
};

module.exports = chunkArray;