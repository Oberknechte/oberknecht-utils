"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regexGenerator = void 0;
function regexGenerator(options) {
    let options_ = options ?? {};
    options_.charGroupReplacement =
        options.charGroupReplacement ?? "([$asd$][W]*?)";
}
exports.regexGenerator = regexGenerator;
