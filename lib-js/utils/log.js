"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.log = void 0;
function date_() { return new Date(new Date().setMinutes(new Date().getMinutes() - new Date().getTimezoneOffset())).toISOString().split("Z")[0].replace("T", " "); }
;
function log(logopt, logmsg, logcolorfg, logcolorbg) {
    var _a, _b, _c, _d;
    if (!global.logs)
        global.logs = {};
    if (!global.logs[String(logopt)])
        global.logs[String(logopt)] = {};
    if (!global.logs.all)
        global.logs.all = {};
    if (typeof logmsg === "string") {
        if (global.logs)
            global.logs.all[Date.now()] = global.logs[String(logopt)][Date.now()] = [logopt, logmsg === null || logmsg === void 0 ? void 0 : logmsg.replace(/\x1b\[[\w;]+m/g, ""), date_()];
    }
    ;
    if (!logmsg && logopt) {
        logmsg = logopt;
        logopt = 0;
    }
    ;
    var logcolors = { "reset": "0", "bright": "1", "dim": "2", "underscore": "4", "blink": "5", "reverse": "7", "hidden": "8", "fgblack": "30", "fgred": "31", "fggreen": "32", "fgyellow": "33", "fgblue": "34", "fgmagenta": "35", "fgcyan": "36", "fgwhite": "37", "bgblack": "40", "bgred": "41", "bggreen": "42", "bgyellow": "43", "bgblue": "44", "bgmagenta": "45", "bgcyan": "46", "bgwhite": "47" };
    var casecolors = { "fg": { "0": "", "1": "30", "2": "41" }, "bg": { "0": "", "1": "43", "2": "41" } };
    // @ts-ignore
    logcolorfg = ("\u001B[".concat((((logcolorfg !== null && logcolorfg !== void 0 ? logcolorfg : 0) === 0 ? (casecolors.fg[(logopt !== null && logopt !== void 0 ? logopt : 0)]) : (logcolors[logcolorfg] ? logcolors[logcolorfg] : logcolorfg !== null && logcolorfg !== void 0 ? logcolorfg : casecolors.fg[(logopt !== null && logopt !== void 0 ? logopt : 0)]))), "m"));
    // @ts-ignore
    logcolorbg = ("\u001B[".concat((((logcolorbg !== null && logcolorbg !== void 0 ? logcolorbg : 0) === 0 ? (casecolors.bg[(logopt !== null && logopt !== void 0 ? logopt : 0)]) : (logcolors[logcolorbg] ? logcolors[logcolorbg] : logcolorbg !== null && logcolorbg !== void 0 ? logcolorbg : casecolors[(logopt !== null && logopt !== void 0 ? logopt : 0)]))), "m"));
    var logm = ["".concat(logcolorbg).concat(logcolorfg, " ").concat(date_(), " \u001B[0m >"), ((_d = (_c = (_b = (_a = logmsg === null || logmsg === void 0 ? void 0 : logmsg.error) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : logmsg === null || logmsg === void 0 ? void 0 : logmsg.error) !== null && _c !== void 0 ? _c : logmsg === null || logmsg === void 0 ? void 0 : logmsg.message) !== null && _d !== void 0 ? _d : logmsg)];
    switch (logopt) {
        default:
        case 0: return console.log.apply(console, __spreadArray([], __read(logm), false));
        case 1: return console.info.apply(console, __spreadArray([], __read(logm), false));
        case 2: return console.error.apply(console, __spreadArray([], __read(logm), false));
    }
    ;
}
exports.log = log;
;
