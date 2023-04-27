function isNullUndefined(searchParam) {
    return [null, undefined].includes(searchParam);
};

module.exports = isNullUndefined;