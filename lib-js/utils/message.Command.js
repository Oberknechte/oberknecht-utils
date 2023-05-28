"use strict";
exports.__esModule = true;
exports.messageCommand = void 0;
function messageCommand(rawMessage) {
    if (!(rawMessage !== null && rawMessage !== void 0 ? rawMessage : undefined))
        return undefined;
    var r = rawMessage.split(" ").filter(function (a) { return (/^[A-Z]+$/g.test(a)); })[0];
    if (!r)
        r = rawMessage.split(" ").filter(function (a) { return (/^[0-9]{3}$/g.test(a)); })[0];
    return r;
}
exports.messageCommand = messageCommand;
;
