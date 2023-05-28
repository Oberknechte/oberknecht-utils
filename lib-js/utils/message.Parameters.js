"use strict";
exports.__esModule = true;
exports.messageParameters = void 0;
function messageParameters(rawMessage) {
    var parameters = {};
    if ((rawMessage !== null && rawMessage !== void 0 ? rawMessage : undefined) && rawMessage.startsWith("@"))
        rawMessage.split(" ")[0].substring(1).split(";").forEach(function (a) { return parameters[a.split("=")[0]] = a.split("=")[1]; });
    return parameters;
}
exports.messageParameters = messageParameters;
;
