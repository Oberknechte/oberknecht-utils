"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageEmotes = void 0;
function messageEmotes(rawEmotes) {
    if (!(rawEmotes ?? undefined))
        return {};
    let r = {};
    rawEmotes?.split(",")?.map(a => {
        let b = a.split(":");
        let c = b[1].split("-");
        r[b[0]] = {
            "start": c[0],
            "end": c[1]
        };
    });
    return r;
}
exports.messageEmotes = messageEmotes;
;
