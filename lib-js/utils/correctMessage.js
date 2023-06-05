"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.correctMessage = void 0;
function correctMessage(message) {
    if (!(message ?? undefined))
        return undefined;
    return message.trim().replace(/\s+/g, " ");
}
exports.correctMessage = correctMessage;
;
