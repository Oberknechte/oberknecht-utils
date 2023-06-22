"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBracketValid = void 0;
function isBracketValid(str) {
    const brackets = [
        ["(", ")"],
        ["[", "]"],
        ["{", "}"],
    ];
    if (!str || typeof str !== "string")
        return false;
    let a = [];
    let s = str.split("");
    for (let i = 0; i < s.length; i++) {
        let b = s[i];
        if (brackets.map((a) => a[0]).includes(b))
            a.push(b);
        else {
            let vi = brackets.map((a) => a[1]).indexOf(b);
            if (a.at(-1) !== brackets[vi][0])
                return false;
            a.pop();
        }
    }
    return true;
}
exports.isBracketValid = isBracketValid;
