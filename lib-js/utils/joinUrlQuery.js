"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.joinUrlQuery = void 0;
const convertToArray_1 = require("./arrayModifiers/convertToArray");
function joinUrlQuery(queryname, queryparams, firstquery, appendifempty) {
    let queryname_ = (0, convertToArray_1.convertToArray)(queryname, false);
    let queryparams_ = (0, convertToArray_1.convertToArray)(queryparams, false);
    let _join = (name, params) => (0, convertToArray_1.convertToArray)(params, false).length > 0 || appendifempty
        ? `${name}=${(0, convertToArray_1.convertToArray)(params, false).join(`&${name}=`)}`
        : undefined;
    if (queryparams_.length == 0)
        return "";
    let r = `${firstquery ? "?" : "&"}`;
    r +=
        queryname_.length === 1
            ? _join(queryname_[0], queryparams_)
            : `${queryname_
                .map((v, i) => _join(v, queryparams_[i]))
                .filter((a) => a)
                .join("&")}`;
    return r;
}
exports.joinUrlQuery = joinUrlQuery;
