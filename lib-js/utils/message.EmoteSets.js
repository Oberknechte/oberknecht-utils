"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageEmoteSets = void 0;
function messageEmoteSets(rawEmoteSets) {
    return rawEmoteSets?.split(",") ?? [];
}
exports.messageEmoteSets = messageEmoteSets;
