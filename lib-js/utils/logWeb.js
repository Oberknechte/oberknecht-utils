"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logWeb = void 0;
const convertToArray_1 = require("./arrayModifiers/convertToArray");
function logWeb(logopt, logmsg, logdecoration, logcolorfg, logcolorbg) {
    if (logopt && !logmsg) {
        logmsg = logopt;
        logopt = 0;
    }
    let logmsg_ = (0, convertToArray_1.convertToArray)(logmsg);
    let logcolorfg_ = (0, convertToArray_1.convertToArray)(logcolorfg);
    let logcolorbg_ = (0, convertToArray_1.convertToArray)(logcolorbg);
    let logdecoration_ = (0, convertToArray_1.convertToArray)(logdecoration);
    let parsedlog = [];
    let logcolors = [];
    let unformattedlogs = [];
    const defaults = {
        0: {
            fg: null,
            bg: null,
            dec: null,
        },
        1: {
            fg: "#000",
            bg: "#fafa52",
            dec: null,
        },
        2: {
            fg: "#FFF",
            bg: "#ff4747",
            dec: null,
        },
    };
    for (let i = 0; i < logmsg_.length; i++) {
        let add;
        let addfg = logcolorfg_[i] ?? defaults[String(logopt)]?.fg ?? undefined;
        let addbg = logcolorbg_[i] ?? defaults[String(logopt)]?.bg ?? undefined;
        let adddec = logdecoration_[i] ?? defaults[String(logopt)]?.dec ?? undefined;
        if (addfg)
            add = (add ?? "") + `color: ${addfg}`;
        if (addbg)
            add = (add ?? "") + (addfg ? "; " : "") + `background: ${addbg}`;
        if (adddec)
            add = (add ?? "") + (addfg || addbg ? "; " : "") + adddec;
        let logoptions = {
            raw: {
                reg: /^@@raw/g,
                matched: Boolean(),
            },
            c: {
                reg: /%%c/g,
                replace: "%c",
                matched: Boolean(),
            },
        };
        Object.keys(logoptions).forEach((a) => {
            let b = logoptions[a];
            b.matched = b.reg.test(logmsg_[i]);
            if (b.matched)
                logmsg_[i] = logmsg_[i].replace(b.reg, b.replace ?? "");
        });
        if (add && typeof logmsg_[i] === "string" && !logoptions.raw.matched) {
            parsedlog.push((add && !logmsg_.includes("%c") && !logoptions.c.matched ? "%c" : "") +
                logmsg_[i] +
                (add ? "" : ""));
            logcolors.push(...(add ?? undefined ? [add] : []));
        }
        else {
            unformattedlogs.push(logmsg_[i]);
        }
    }
    let logopt_ = ["log", "info", "error", "debug"][[0, 1, 2, 3].at(parseInt(String(logopt)))];
    let nicedate = () => {
        return new Date(new Date().setMinutes(new Date().getMinutes() - new Date().getTimezoneOffset()))
            .toISOString()
            .split(".")[0]
            .replace("T", " ");
    };
    console[logopt_](`%c [Ju] %c [${nicedate()}]` +
        (parsedlog[0] ? "\n" : "") +
        parsedlog.join(""), "color: #000; background: #00FFFF; font-weight: bold", "color: #9c9789; font-size: 8px", ...logcolors, ...[
        ...(typeof unformattedlogs[0] === "string"
            ? ["\n" + (unformattedlogs[0] ?? "")]
            : [unformattedlogs[0] ?? ""]),
        ...(unformattedlogs.slice(1) ?? []),
    ]);
}
exports.logWeb = logWeb;
