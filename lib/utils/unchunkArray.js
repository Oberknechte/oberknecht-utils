const extendedTypeof = require("./extendedTypeof");

/** @param {Array} arr @see https://github.com/NuroC/moomoo-in-depth/tree/main/protocol#unchunk-arrays @returns {Array} */
function unchunkArray(arr) {
    if (extendedTypeof(arr) !== "array") return undefined;

    let r = [];
    for (let i = 0; i < arr.length; i++) r = r.concat(arr[i]);
    return r;
};

module.exports = unchunkArray;