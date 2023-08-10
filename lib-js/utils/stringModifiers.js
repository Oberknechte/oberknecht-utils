"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringModifiers = void 0;
const secondCase_1 = require("./stringModifiers/secondCase");
const reverse_1 = require("./stringModifiers/reverse");
const reverseWords_1 = require("./stringModifiers/reverseWords");
const reverseInWords_1 = require("./stringModifiers/reverseInWords");
const toFancyText_1 = require("./stringModifiers/toFancyText");
class stringModifiers {
    static secondCase = secondCase_1.secondCase;
    static reverse = reverse_1.reverse;
    static reverseWords = reverseWords_1.reverseWords;
    static reverseInWords = reverseInWords_1.reverseInWords;
    static toFancyText = toFancyText_1.toFancyText;
}
exports.stringModifiers = stringModifiers;
