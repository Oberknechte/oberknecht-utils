"use strict";
exports.__esModule = true;
exports.correctChannelName = void 0;
function correctChannelName(channel) {
    if (!(channel !== null && channel !== void 0 ? channel : undefined))
        return undefined;
    return "#".concat(channel.toLowerCase().trim().replace(/^#/g, ""));
}
exports.correctChannelName = correctChannelName;
;
