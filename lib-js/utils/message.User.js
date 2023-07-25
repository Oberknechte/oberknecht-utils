"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageUser = void 0;
function messageUser(rawMessage) {
    let match = rawMessage?.match(/(?<=^:)\w+(?=!)/g);
    if (!(rawMessage ?? undefined) || !(match ?? undefined))
        return undefined;
    return match?.[0];
}
exports.messageUser = messageUser;
