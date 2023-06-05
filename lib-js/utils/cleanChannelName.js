"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanChannelName = void 0;
const recreate_1 = require("./recreate");
function cleanChannelName(channel) {
    if (!channel)
        return undefined;
    return (0, recreate_1.recreate)(channel).toString().trim().replace(/^#/g, "");
}
exports.cleanChannelName = cleanChannelName;
;
