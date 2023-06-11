"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageEmotes = void 0;
function messageEmotes(rawEmotes) {
    if (!(rawEmotes ?? undefined))
        return [];
    let r = [];
    rawEmotes?.split("/")?.forEach((a) => {
        let b = a.split(":");
        let c = b[0];
        let d = b[1];
        d.split(",").map((e) => {
            let f = e.split("-");
            r.push({
                id: c,
                start: parseInt(f[0]),
                end: parseInt(f[1]),
            });
        });
    });
    return r;
}
exports.messageEmotes = messageEmotes;
