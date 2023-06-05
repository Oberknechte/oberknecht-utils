"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messagePrefix = void 0;
function messagePrefix(rawMessage) {
    if (!(rawMessage ?? undefined))
        return undefined;
    return rawMessage.split(" ").filter((v, i) => { return i <= 2 && /^:+(\w+\!\w+@\w+\.)*tmi\.twitch\.tv/g.test(v); })[0] || undefined;
}
exports.messagePrefix = messagePrefix;
;
