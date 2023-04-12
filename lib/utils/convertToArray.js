function convertToArray(arr, retundefined) {
    if (!(arr ?? undefined)) return (retundefined ? undefined : []);
    return (!Array.isArray(arr) ? [arr] : arr);
};

module.exports = convertToArray;