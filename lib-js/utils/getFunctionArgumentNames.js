"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFunctionArgumentNames = void 0;
function getFunctionArgumentNames(func) {
    return func
        .toString()
        .split("\n")[0]
        .replace(/^function\s\w+\(/, "")
        .split(")")[0]
        .split(/\s*,\s*/);
}
exports.getFunctionArgumentNames = getFunctionArgumentNames;
