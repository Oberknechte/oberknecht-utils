"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPyramid = void 0;
const _1 = require(".");
function createPyramid(n_, s) {
    let r = [];
    let n__ = n_ && _1.regex.numregex().test(n_.toString()) ? parseInt(n_.toString()) : n_;
    let n = n__ ? ((0, _1.isEvan)(n__) ? n__ + 1 : n__) : 5;
    let half = (0, _1.getFullNumber)(n / 2);
    for (let i = 1; i < n + 1; i++) {
        if (i < half) {
            r.push(s.repeat(i));
        }
        else if (i === half) {
            r.push(s.repeat(half));
        }
        else {
            r.push(s.repeat(n + 1 - i));
        }
    }
    return r;
}
exports.createPyramid = createPyramid;
