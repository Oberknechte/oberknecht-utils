"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnErr = void 0;
const log_1 = require("./log");
function returnErr(e, logerr, fullstack) {
    if (!e)
        return "";
    // @ts-ignore
    let r2 = e?.error ?? e;
    let r = "";
    let rfull = "";
    if (r2.stack) {
        let appendStack = (e2) => {
            r += (r.length > 0 ? " (caused by:) " : "") + (e2?.message ?? e2);
            rfull += (rfull.length > 0 ? "\nCause: " : "") + (e2?.stack ?? e2);
            if (e2?.cause)
                return appendStack(e2.cause);
            return;
        };
        appendStack(r2);
    }
    if (logerr)
        (0, log_1.log)(2, r);
    return fullstack ? rfull : r;
}
exports.returnErr = returnErr;
