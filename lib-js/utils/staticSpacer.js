"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.staticSpacer = void 0;
function staticSpacer(spacerWidth, spacerContent, spacerColor) {
    let color = () => {
        if (!spacerColor)
            return "";
        if (typeof spacerColor === "string")
            return spacerColor;
        if (spacerContent == "[ERROR]")
            return "\x1b[4;1;31m";
        return "\x1b[4;1;36m";
    };
    let spacerContent_ = spacerContent.toString();
    let sw = spacerWidth * 8;
    let s = sw - spacerContent_.length;
    if (s <= 0)
        return spacerContent_;
    let st = s >= 8 ? ` `.repeat(8).repeat(Math.floor(s / 8)) : "";
    let ss = " ".repeat(s % 8);
    return `${color()}${spacerContent_}\x1b[0m${ss}${st}`;
}
exports.staticSpacer = staticSpacer;
