"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberspacer = void 0;
function numberspacer(n, replacer) {
    if (!(n ?? undefined)?.toString() || !["number", "string"].includes(typeof n))
        return undefined;
    return n.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, replacer || " ");
}
exports.numberspacer = numberspacer;
;
