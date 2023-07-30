"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createID = void 0;
const _1 = require(".");
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_";
const usedIDs = [];
function createID(length_, preventDuplicates_) {
    let preventDuplicates = !(0, _1.isNullUndefined)(preventDuplicates_)
        ? preventDuplicates_
        : true;
    let length = length_ ?? 5;
    let r = "";
    function actualCreateID() {
        if (usedIDs.length >= (chars.length ^ length))
            length++;
        let r2 = "";
        for (let i = 0; i < length; i++) {
            r2 += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        if (preventDuplicates && usedIDs.includes(r2))
            return actualCreateID();
        usedIDs.push(r2);
        r = r2;
    }
    actualCreateID();
    return r;
}
exports.createID = createID;
