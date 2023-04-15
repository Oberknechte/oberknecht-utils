const convertToArray = require("./convertToArray");

/** @param {String | Array} queryname @param {String | Array} queryparams @param {Boolean} firstquery */
function joinUrlQuery(queryname, queryparams, firstquery, appendifempty) {
    if (!queryparams) { queryparams = [...arguments]; queryparams.shift() };

    let queryname_ = convertToArray(queryname);
    let queryparams_ = convertToArray(queryparams);

    let _join = (name, params) => (convertToArray(params).length > 0 || appendifempty) ? `${name}=${convertToArray(params).join(`&${name}=`)}` : undefined;

    let r = `${(firstquery ? "?" : "&")}`;
    r += ((queryname_.length == 1) ? _join(queryname, queryparams_) : `${queryname_.map((v, i) => _join(v, queryparams_[i])).filter(a => a).join("&")}`);

    return r;
};

module.exports = joinUrlQuery;