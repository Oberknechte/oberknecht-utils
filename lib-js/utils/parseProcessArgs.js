"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseProcessArgs = void 0;
const _1 = require(".");
function parseProcessArgs(args, processArgs) {
    let processArgs_ = (0, _1.recreate)(processArgs ?? {});
    let lastCommand;
    args.slice(2).map((a) => {
        if (/^\-+\w+$/g.test(a)) {
            const b = a.replace(/^\-+/, "");
            const c = Object.keys(processArgs_).filter((a) => processArgs_[a].keys.includes(b))?.[0];
            if (!c)
                return (lastCommand = undefined);
            let d = processArgs_[c];
            d.args = [];
            lastCommand = d;
        }
        else if (lastCommand &&
            lastCommand.allowArgs &&
            (!lastCommand.allowArgs ||
                !lastCommand.argsLength ||
                lastCommand.args.length < lastCommand.argsLength)) {
            lastCommand.args.push(a);
        }
    });
    return processArgs_;
}
exports.parseProcessArgs = parseProcessArgs;
