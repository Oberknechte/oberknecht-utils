"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDateParsed = void 0;
function getDateParsed(date, displayMS) {
    let date_ = date ??
        new Date(new Date().setMinutes(new Date().getMinutes() - new Date().getTimezoneOffset()));
    let r = new Date(date_);
    return r
        .toISOString()
        .split(displayMS ? "Z" : ".")[0]
        .replace("T", " ");
}
exports.getDateParsed = getDateParsed;
