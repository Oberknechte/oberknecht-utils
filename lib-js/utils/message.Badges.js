"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageBadges = void 0;
function messageBadges(badges) {
    let r = {};
    badges?.split(",")?.forEach((a) => (r[a.split("/")[0]] = a.split("/")[1]));
    return r;
}
exports.messageBadges = messageBadges;
