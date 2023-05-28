"use strict";
exports.__esModule = true;
exports.returnErr = void 0;
var log_1 = require("./log");
function returnErr(e, logerr, fullstack) {
    var _a;
    if (!e)
        return "";
    // @ts-ignore
    var r2 = ((_a = e === null || e === void 0 ? void 0 : e.error) !== null && _a !== void 0 ? _a : e);
    var r = "";
    var rfull = "";
    if (r2.stack) {
        var appendStack_1 = function (e2) {
            var _a, _b;
            r += ((r.length > 0 ? " (caused by:) " : "") + ((_a = e2 === null || e2 === void 0 ? void 0 : e2.message) !== null && _a !== void 0 ? _a : e2));
            rfull += (rfull.length > 0 ? "\nCause: " : "") + ((_b = e2 === null || e2 === void 0 ? void 0 : e2.stack) !== null && _b !== void 0 ? _b : e2);
            if (e2 === null || e2 === void 0 ? void 0 : e2.cause)
                return appendStack_1(e2.cause);
            return;
        };
        appendStack_1(r2);
    }
    ;
    if (logerr)
        (0, log_1.log)(2, r);
    return (fullstack ? rfull : r);
}
exports.returnErr = returnErr;
;
