"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messagePrefix = void 0;
function messagePrefix(rawMessage) {
    if (!(rawMessage ?? undefined))
        return "";
    return rawMessage.split(" ").filter((v, i) => { return i <= 2 && /^:+(\w+\!\w+@\w+\.)*tmi\.twitch\.tv/g.test(v); })[0] ?? "";
}
exports.messagePrefix = messagePrefix;
;
