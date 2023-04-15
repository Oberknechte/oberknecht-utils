const recreate = require("./recreate");

/** @param {any} arr @param {Boolean?} retundefined @returns {Array} */
function convertToArray(arr, retundefined) {
    if (!(arr ?? undefined)) return (retundefined ? undefined : []);
    return recreate((!Array.isArray(arr) ? [arr] : arr));
};

module.exports = convertToArray;