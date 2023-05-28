"use strict";
exports.__esModule = true;
exports.messagePrefix = void 0;
function messagePrefix(rawMessage) {
    if (!(rawMessage !== null && rawMessage !== void 0 ? rawMessage : undefined))
        return undefined;
    return rawMessage.split(" ").filter(function (v, i) { return i <= 2 && /^:+(\w+\!\w+@\w+\.)*tmi\.twitch\.tv/g.test(v); })[0] || undefined;
}
exports.messagePrefix = messagePrefix;
;
