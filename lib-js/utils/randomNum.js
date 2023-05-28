"use strict";
exports.__esModule = true;
exports.randomNum = void 0;
function randomNum(min, max, add) {
    min = min !== null && min !== void 0 ? min : 0;
    max = max !== null && max !== void 0 ? max : 10;
    add = add !== null && add !== void 0 ? add : 1;
    var s = [min, max].sort(function (a, b) {
        return (a - b);
    });
    return add + s[0] + Math.floor(Math.random() * (s[1] - s[0]));
}
exports.randomNum = randomNum;
;
