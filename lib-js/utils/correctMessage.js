"use strict";
exports.__esModule = true;
exports.correctMessage = void 0;
function correctMessage(message) {
    if (!(message !== null && message !== void 0 ? message : undefined))
        return undefined;
    return message.trim().replace(/\s+/g, " ");
}
exports.correctMessage = correctMessage;
;
