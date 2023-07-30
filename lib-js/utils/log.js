"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
const _1 = require(".");
const maxGlobalLogs = 100;
const casecolors = {
    fg: { "0": "", "1": "30", "2": "41" },
    bg: { "0": "", "1": "43", "2": "41" },
};
const logOpts = [0, 1, 2];
function log(logOpt, ...logMsg) {
    if (!global.logs)
        global.logs = {};
    if (!global.logs[String(logOpt)])
        global.logs[String(logOpt)] = {};
    if (!global.logs.all)
        global.logs.all = {};
    let logOptOption = logOpt?.option ?? (logOpts.includes(logOpt) ? logOpt : 0);
    let logOpt_ = {
        option: logOptOption,
        logColorFG: logOpt?.logColorFG ?? casecolors.fg[logOptOption] ?? "0",
        logColorBG: logOpt?.logColorBG ?? casecolors.bg[logOptOption] ?? "0",
    };
    let logMsg_ = [...logMsg];
    if (((0, _1.extendedTypeof)(logOpt) !== "json" ||
        (!logOpt.option && !logOpt.logColorFG && !logOpt.logColorBG)) &&
        !logOpts.includes(logOpt))
        logMsg_.unshift(logOpt);
    [(global.logs[String(logOptOption)], global.logs.all)].forEach((a) => {
        a = (0, _1.concatJSON)(Object.keys(a ?? {})
            .slice(0, maxGlobalLogs)
            .map((b) => {
            return { [b]: a[b] };
        }));
    });
    if (global.logs)
        global.logs.all[Date.now()] = global.logs[String(logOpt)][Date.now()] = [
            logOpt_,
            logMsg_?.map((a) => {
                if (typeof a === "string")
                    return a?.replace(/\x1b\[[\w;]+m/g, "");
                return a;
            }),
            (0, _1.getDateParsed)(),
        ];
    logOpt = logOpt ?? 0;
    const logcolorfg = `\x1b[${logOpt_.logColorFG}m`;
    const logcolorbg = `\x1b[${logOpt_.logColorBG}m`;
    const logm = [
        `${logcolorbg}${logcolorfg} ${(0, _1.getDateParsed)()} \x1b[0m >`,
        ...logMsg_,
    ];
    switch (logOpt) {
        default:
        case 0:
            return console.log(...logm);
        case 1:
            return console.info(...logm);
        case 2:
            return console.error(...logm);
    }
}
exports.log = log;
