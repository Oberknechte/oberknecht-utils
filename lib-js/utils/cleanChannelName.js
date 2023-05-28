"use strict";
exports.__esModule = true;
exports.cleanChannelName = void 0;
function cleanChannelName(channel) {
    return channel.toString().trim().replace(/^#/g, "");
}
exports.cleanChannelName = cleanChannelName;
;
