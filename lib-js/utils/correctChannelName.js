"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.correctChannelName = void 0;
function correctChannelName(channel) {
    if (!(channel ?? undefined))
        return undefined;
    return `#${channel.toLowerCase().trim().replace(/^#/g, "")}`;
}
exports.correctChannelName = correctChannelName;
