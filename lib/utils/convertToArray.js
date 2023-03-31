function convertToArray(arr) {
    return (!Array.isArray(arr) ? [arr] : arr);
};

module.exports = convertToArray;