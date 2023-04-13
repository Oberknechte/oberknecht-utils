const recreate = require("./recreate");

function convertToArray(arr, retundefined) {
    if (!(arr ?? undefined)) return (retundefined ? undefined : []);
    return recreate((!Array.isArray(arr) ? [arr] : arr));
};

module.exports = convertToArray;