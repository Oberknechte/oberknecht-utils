"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomNum = void 0;
function randomNum(min, max, add) {
    min = min ?? 0;
    max = max ?? 10;
    add = add ?? 1;
    let s = [min, max].sort((a, b) => {
        return (a - b);
    });
    return add + s[0] + Math.floor(Math.random() * (s[1] - s[0]));
}
exports.randomNum = randomNum;
;
