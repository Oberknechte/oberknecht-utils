"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.ascii = void 0;
var recreate_1 = require("./recreate");
var regexEscape_1 = require("./regexEscape");
var ascii = /** @class */ (function () {
    function ascii() {
    }
    var _a;
    _a = ascii;
    ascii.specialCharacters = { "33": "!", "34": "\"", "35": "#", "36": "$", "37": "%", "38": "&", "39": "'", "40": "(", "41": ")", "42": "*", "43": "+", "44": ",", "45": "-", "46": ".", "47": "/", "58": ":", "59": ";", "60": "<", "61": "=", "62": ">", "63": "?", "64": "@", "91": "[", "92": "\\", "93": "]", "94": "^", "95": "_", "96": "`", "123": "{", "124": "|", "125": "}", "126": "~" };
    ascii.alphabetCharactersLower = { "97": "a", "98": "b", "99": "c", "100": "d", "101": "e", "102": "f", "103": "g", "104": "h", "105": "i", "106": "j", "107": "k", "108": "l", "109": "m", "110": "n", "111": "o", "112": "p", "113": "q", "114": "r", "115": "s", "116": "t", "117": "u", "118": "v", "119": "w", "120": "x", "121": "y", "122": "z" };
    ascii.alphabetCharactersUpper = { "65": "A", "66": "B", "67": "C", "68": "D", "69": "E", "70": "F", "71": "G", "72": "H", "73": "I", "74": "J", "75": "K", "76": "L", "77": "M", "78": "N", "79": "O", "80": "P", "81": "Q", "82": "R", "83": "S", "84": "T", "85": "U", "86": "V", "87": "W", "88": "X", "89": "Y", "90": "Z" };
    ascii.alphabetCharactersAll = __assign(__assign({}, _a.alphabetCharactersLower), _a.alphabetCharactersUpper);
    ascii.numberCharacters = { "48": "0", "49": "1", "50": "2", "51": "3", "52": "4", "53": "5", "54": "6", "55": "7", "56": "8", "57": "9" };
    ascii.allCharacters = __assign(__assign(__assign({}, _a.specialCharacters), _a.alphabetCharactersAll), _a.numberCharacters);
    ascii.toChars = function (s) {
        var r = (0, recreate_1.recreate)(s);
        Object.keys(_a.allCharacters).forEach(function (a) {
            r = r.replace(new RegExp("%".concat(a), "gi"), _a.allCharacters[a]);
        });
        r = r.replace(/%32/g, " ");
        return r;
    };
    ascii.toNumbers = function (s, includeAlphabet, includeNumbers) {
        var r = (0, recreate_1.recreate)(s);
        Object.values(_a.specialCharacters).forEach(function (a, i) {
            r = r.replace(new RegExp("(?<!\\u0001%)".concat((0, regexEscape_1.regexEscape)(a), "(?!\\u0001)"), "gi"), "\u0001%".concat(Object.keys(_a.specialCharacters)[i], "\u0001"));
        });
        if (includeNumbers) {
            Object.values(_a.numberCharacters).forEach(function (a, i) {
                r = r.replace(new RegExp("(?<!\\u0001%)".concat((a), "(?!\\u0001)"), "gi"), "\u0001%".concat(Object.keys(_a.alphabetCharactersAll)[i], "\u0001"));
            });
        }
        ;
        if (includeAlphabet) {
            Object.values(_a.alphabetCharactersAll).forEach(function (a, i) {
                r = r.replace(new RegExp("(?<!\\u0001%)".concat((a), "(!?\\u0001)"), "gi"), "\u0001%".concat(Object.keys(_a.alphabetCharactersAll)[i], "\u0001"));
            });
        }
        ;
        r = r.replace(/\s/g, "\u0001%32\u0001");
        return r.replace(/\u0001/g, "");
    };
    return ascii;
}());
exports.ascii = ascii;
;
