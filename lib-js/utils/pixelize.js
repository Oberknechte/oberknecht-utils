"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pixelize = void 0;
const _1 = require(".");
function pixelize(str, pixelIndex, pixelChar) {
    if (!str)
        return undefined;
    let str_ = str.split("");
    let pixelIndex_ = pixelIndex ?? (0, _1.getFullNumber)(str_.length / 2);
    let pixelChar_ = pixelChar ?? "󠀀";
    return (str_.slice(0, pixelIndex_).join("") +
        pixelChar_ +
        str_.slice(pixelIndex_).join(""));
}
exports.pixelize = pixelize;
