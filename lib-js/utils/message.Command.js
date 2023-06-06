"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageCommand = void 0;
function messageCommand(rawMessage) {
    if (!(rawMessage ?? undefined))
        return "";
    let r = rawMessage.split(" ").filter(a => { return (/^[A-Z]+$/g.test(a)); })[0];
    if (!r)
        r = rawMessage.split(" ").filter(a => { return (/^[0-9]{3}$/g.test(a)); })[0];
    return r;
}
exports.messageCommand = messageCommand;
;
