"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.joinUrlQuery = void 0;
var convertToArray_1 = require("./convertToArray");
function joinUrlQuery(queryname, queryparams, firstquery, appendifempty) {
    if (!queryparams) {
        queryparams = __spreadArray([], __read(arguments), false);
        queryparams.shift();
    }
    ;
    var queryname_ = (0, convertToArray_1.convertToArray)(queryname, false);
    var queryparams_ = (0, convertToArray_1.convertToArray)(queryparams, false);
    var _join = function (name, params) { return ((0, convertToArray_1.convertToArray)(params, false).length > 0 || appendifempty) ? "".concat(name, "=").concat((0, convertToArray_1.convertToArray)(params, false).join("&".concat(name, "="))) : undefined; };
    if (queryparams_.length == 0)
        return "";
    var r = "".concat((firstquery ? "?" : "&"));
    r += ((queryname_.length === 1) ? _join(queryname_[0], queryparams_) : "".concat(queryname_.map(function (v, i) { return _join(v, queryparams_[i]); }).filter(function (a) { return a; }).join("&")));
    return r;
}
exports.joinUrlQuery = joinUrlQuery;
;
