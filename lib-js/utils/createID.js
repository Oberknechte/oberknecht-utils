"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createID = void 0;
function createID(length) {
    let length_ = length ?? 5;
    let r = "";
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_";
    for (let i = 0; i < length_; i++) {
        r += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return r;
}
exports.createID = createID;
