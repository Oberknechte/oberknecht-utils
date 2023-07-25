"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ascii = void 0;
const recreate_1 = require("./recreate");
const regexEscape_1 = require("./regexEscape");
class ascii {
    static specialCharacters = {
        "33": "!",
        "34": '"',
        "35": "#",
        "36": "$",
        "37": "%",
        "38": "&",
        "39": "'",
        "40": "(",
        "41": ")",
        "42": "*",
        "43": "+",
        "44": ",",
        "45": "-",
        "46": ".",
        "47": "/",
        "58": ":",
        "59": ";",
        "60": "<",
        "61": "=",
        "62": ">",
        "63": "?",
        "64": "@",
        "91": "[",
        "92": "\\",
        "93": "]",
        "94": "^",
        "95": "_",
        "96": "`",
        "123": "{",
        "124": "|",
        "125": "}",
        "126": "~",
    };
    static alphabetCharactersLower = {
        "97": "a",
        "98": "b",
        "99": "c",
        "100": "d",
        "101": "e",
        "102": "f",
        "103": "g",
        "104": "h",
        "105": "i",
        "106": "j",
        "107": "k",
        "108": "l",
        "109": "m",
        "110": "n",
        "111": "o",
        "112": "p",
        "113": "q",
        "114": "r",
        "115": "s",
        "116": "t",
        "117": "u",
        "118": "v",
        "119": "w",
        "120": "x",
        "121": "y",
        "122": "z",
    };
    static alphabetCharactersUpper = {
        "65": "A",
        "66": "B",
        "67": "C",
        "68": "D",
        "69": "E",
        "70": "F",
        "71": "G",
        "72": "H",
        "73": "I",
        "74": "J",
        "75": "K",
        "76": "L",
        "77": "M",
        "78": "N",
        "79": "O",
        "80": "P",
        "81": "Q",
        "82": "R",
        "83": "S",
        "84": "T",
        "85": "U",
        "86": "V",
        "87": "W",
        "88": "X",
        "89": "Y",
        "90": "Z",
    };
    static alphabetCharactersAll = {
        ...this.alphabetCharactersLower,
        ...this.alphabetCharactersUpper,
    };
    static numberCharacters = {
        "48": "0",
        "49": "1",
        "50": "2",
        "51": "3",
        "52": "4",
        "53": "5",
        "54": "6",
        "55": "7",
        "56": "8",
        "57": "9",
    };
    static allCharacters = {
        ...this.specialCharacters,
        ...this.alphabetCharactersAll,
        ...this.numberCharacters,
    };
    static toChars = (s) => {
        let r = (0, recreate_1.recreate)(s);
        Object.keys(this.allCharacters).forEach((a) => {
            r = r.replace(new RegExp(`%${a}`, "gi"), this.allCharacters[a]);
        });
        r = r.replace(/%32/g, " ");
        return r;
    };
    static toNumbers = (s, includeAlphabet, includeNumbers) => {
        let r = (0, recreate_1.recreate)(s);
        Object.values(this.specialCharacters).forEach((a, i) => {
            r = r.replace(new RegExp(`(?<!\\u0001%)${(0, regexEscape_1.regexEscape)(a)}(?!\\u0001)`, "gi"), `\u0001%${Object.keys(this.specialCharacters)[i]}\u0001`);
        });
        if (includeNumbers) {
            Object.values(this.numberCharacters).forEach((a, i) => {
                r = r.replace(new RegExp(`(?<!\\u0001%)${a}(?!\\u0001)`, "gi"), `\u0001%${Object.keys(this.alphabetCharactersAll)[i]}\u0001`);
            });
        }
        if (includeAlphabet) {
            Object.values(this.alphabetCharactersAll).forEach((a, i) => {
                r = r.replace(new RegExp(`(?<!\\u0001%)${a}(!?\\u0001)`, "gi"), `\u0001%${Object.keys(this.alphabetCharactersAll)[i]}\u0001`);
            });
        }
        r = r.replace(/\s/g, `\u0001%32\u0001`);
        return r.replace(/\u0001/g, "");
    };
}
exports.ascii = ascii;
