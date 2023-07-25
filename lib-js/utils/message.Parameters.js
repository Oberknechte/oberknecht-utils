"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageParameters = void 0;
function messageParameters(rawMessage) {
    let parameters = {};
    if ((rawMessage ?? undefined) && rawMessage.startsWith("@"))
        rawMessage
            .split(" ")[0]
            .substring(1)
            .split(";")
            .forEach((a) => {
            return (parameters[a.split("=")[0]] = a.split("=")[1]);
        });
    return parameters;
}
exports.messageParameters = messageParameters;
