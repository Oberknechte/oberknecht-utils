"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pyramidCreator = void 0;
const _1 = require("./");
function pyramidCreator(n_, s) {
    let r = "";
    let n = (0, _1.isEvan)(n_) ? n_ + 1 : n_;
    let half = (0, _1.getFullNumber)(n / 2);
    for (let i = 1; i < n + 1; i++) {
        if (i > 1)
            r += "\n";
        if (i < half) {
            r += s.repeat(i);
        }
        else if (i === half) {
            r += s.repeat(half);
        }
        else {
            r += s.repeat(n + 1 - i);
        }
    }
    return r;
}
exports.pyramidCreator = pyramidCreator;
