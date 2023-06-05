"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageEmotes = void 0;
function messageEmotes(rawEmotes) {
    if (!(rawEmotes ?? undefined))
        return [];
    return rawEmotes.split(",").map(a => {
        return a.split(":")[0];
    });
}
exports.messageEmotes = messageEmotes;
;
