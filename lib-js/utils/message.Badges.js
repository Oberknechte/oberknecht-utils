"use strict";
exports.__esModule = true;
exports.messageBadges = void 0;
;
function messageBadges(badges) {
    var _a;
    var r = {};
    (_a = badges === null || badges === void 0 ? void 0 : badges.split(",")) === null || _a === void 0 ? void 0 : _a.forEach(function (a) { return r[a.split("/")[0]] = a.split("/")[1]; });
    return r;
}
exports.messageBadges = messageBadges;
;
