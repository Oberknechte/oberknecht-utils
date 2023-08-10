"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseInWords = void 0;
const reverse_1 = require("./reverse");
function reverseInWords(s) {
    return s
        ?.split(" ")
        ?.map((a) => (0, reverse_1.reverse)(a))
        ?.join(" ");
}
exports.reverseInWords = reverseInWords;
