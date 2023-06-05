"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageContent = void 0;
function messageContent(rawMessage) {
    return rawMessage?.split(" ")?.slice(4)?.join(" ")?.replace(/(^:|^\s|\s$)/g, "")?.replace(/[\s]{2,}/g, " ") ?? undefined;
}
exports.messageContent = messageContent;
;
