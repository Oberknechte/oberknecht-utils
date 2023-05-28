"use strict";
exports.__esModule = true;
exports.messageUser = void 0;
function messageUser(rawMessage) {
    var match = rawMessage === null || rawMessage === void 0 ? void 0 : rawMessage.match(/(?<=^:)\w+(?=!)/g);
    if (!(rawMessage !== null && rawMessage !== void 0 ? rawMessage : undefined) || !(match !== null && match !== void 0 ? match : undefined))
        return undefined;
    return match === null || match === void 0 ? void 0 : match[0];
}
exports.messageUser = messageUser;
;
