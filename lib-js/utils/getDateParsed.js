"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDateParsed = void 0;
function getDateParsed(date) {
    let date_ = date ?? new Date();
    let r = new Date(date_);
    return r.toISOString().split(".")[0].replace("T", " ");
}
exports.getDateParsed = getDateParsed;
