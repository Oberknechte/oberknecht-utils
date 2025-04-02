"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stackName = void 0;
const _1 = require(".");
function stackName(...args) {
    let opt = args[0];
    let staticSpacerWidth = (0, _1.extendedTypeof)(args[1]) === "number" ? args[1] : 2;
    // let args = [...arguments];
    if ((opt ?? undefined) && !isNaN(opt))
        args.shift();
    if (staticSpacerWidth === [...arguments][1])
        args.shift();
    let stackret = args.map((a) => {
        if (typeof a === "string") {
            return `[${a.toUpperCase()}]`;
        }
        else {
            return `nameerr`;
        }
    });
    let stackcolor = stackret.some((s2) => {
        return s2 == "[ERROR]";
    })
        ? "\x1b[4;31m"
        : "\x1b[4;1;36m";
    switch (opt) {
        default: {
            return [
                stackret.join(" "),
                stackret,
                stackret.map((s) => {
                    return (0, _1.staticSpacer)(staticSpacerWidth, s, stackcolor);
                }),
                stackret
                    .map((s) => {
                    return (0, _1.staticSpacer)(staticSpacerWidth, s, stackcolor);
                })
                    .join(" "),
            ];
        }
        case 1: {
            return [
                stackret.join(" "),
                stackret,
                stackret.map((s) => {
                    return (0, _1.staticSpacer)(staticSpacerWidth, s);
                }),
                stackret
                    .map((s) => {
                    return (0, _1.staticSpacer)(staticSpacerWidth, s);
                })
                    .join(" "),
            ];
        }
    }
}
exports.stackName = stackName;
