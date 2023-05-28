"use strict";
exports.__esModule = true;
exports.messageContent = void 0;
function messageContent(rawMessage) {
    var _a, _b, _c, _d, _e;
    return (_e = (_d = (_c = (_b = (_a = rawMessage === null || rawMessage === void 0 ? void 0 : rawMessage.split(" ")) === null || _a === void 0 ? void 0 : _a.slice(4)) === null || _b === void 0 ? void 0 : _b.join(" ")) === null || _c === void 0 ? void 0 : _c.replace(/(^:|^\s|\s$)/g, "")) === null || _d === void 0 ? void 0 : _d.replace(/[\s]{2,}/g, " ")) !== null && _e !== void 0 ? _e : undefined;
}
exports.messageContent = messageContent;
;
