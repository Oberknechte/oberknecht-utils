"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.joinString = void 0;
const _1 = require(".");
function joinString(pathParts, joiner, noreplace, replaceStart, replaceEnd) {
    if (!pathParts)
        return "";
    const joiner_ = joiner ?? "";
    let r = "";
    r = (0, _1.dissolveArray)(pathParts).join(joiner_);
    (() => {
        if (noreplace || joiner_.length === 0)
            return;
        const replaceReg = new RegExp(`${(0, _1.regexEscape)(joiner_)}+`, "g");
        const replaceRegStart = new RegExp(`^${(0, _1.regexEscape)(joiner_)}+`);
        const replaceRegEnd = new RegExp(`${(0, _1.regexEscape)(joiner_)}+$`);
        r = r.replace(replaceReg, joiner_);
        if (replaceStart)
            r = r.replace(replaceRegStart, "");
        if (replaceEnd)
            r = r.replace(replaceRegEnd, "");
    })();
    return r;
}
exports.joinString = joinString;
