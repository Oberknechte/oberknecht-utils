"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFunctionArgumentNames = void 0;
function getFunctionArgumentNames(func) {
    return func
        .toString()
        .split("\n")[0]
        .replace(/\s+/g, "")
        .replace(/^function\w+\(/, "")
        .split(")")[0]
        .split(/,/);
}
exports.getFunctionArgumentNames = getFunctionArgumentNames;
