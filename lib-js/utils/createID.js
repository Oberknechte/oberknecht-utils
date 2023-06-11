"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomId = void 0;
function randomId(length) {
    let length_ = (length ?? 5);
    let r = "";
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_";
    for (let i = 0; i < length_; i++) {
        r += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    ;
    return r;
}
exports.randomId = randomId;
;
