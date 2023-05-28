"use strict";
exports.__esModule = true;
exports.messageEmotes = void 0;
function messageEmotes(rawEmotes) {
    if (!(rawEmotes !== null && rawEmotes !== void 0 ? rawEmotes : undefined))
        return [];
    return rawEmotes.split(",").map(function (a) {
        return a.split(":")[0];
    });
}
exports.messageEmotes = messageEmotes;
;
