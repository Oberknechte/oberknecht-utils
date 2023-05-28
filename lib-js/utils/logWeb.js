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
exports.logWeb = void 0;
var convertToArray_1 = require("./convertToArray");
function logWeb(logopt, logmsg, logdecoration, logcolorfg, logcolorbg) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    if (logopt && !logmsg) {
        logmsg = logopt;
        logopt = 0;
    }
    ;
    var logmsg_ = (0, convertToArray_1.convertToArray)(logmsg);
    var logcolorfg_ = (0, convertToArray_1.convertToArray)(logcolorfg);
    var logcolorbg_ = (0, convertToArray_1.convertToArray)(logcolorbg);
    var logdecoration_ = (0, convertToArray_1.convertToArray)(logdecoration);
    var parsedlog = [];
    var logcolors = [];
    var unformattedlogs = [];
    var defaults = {
        0: {
            fg: null,
            bg: null,
            dec: null
        },
        1: {
            fg: "#000",
            bg: "#fafa52",
            dec: null
        },
        2: {
            fg: "#FFF",
            bg: "#ff4747",
            dec: null
        }
    };
    var _loop_1 = function (i) {
        var add = void 0;
        var addfg = ((_c = (_a = logcolorfg_[i]) !== null && _a !== void 0 ? _a : (_b = defaults[String(logopt)]) === null || _b === void 0 ? void 0 : _b.fg) !== null && _c !== void 0 ? _c : undefined);
        var addbg = ((_f = (_d = logcolorbg_[i]) !== null && _d !== void 0 ? _d : (_e = defaults[String(logopt)]) === null || _e === void 0 ? void 0 : _e.bg) !== null && _f !== void 0 ? _f : undefined);
        var adddec = ((_j = (_g = logdecoration_[i]) !== null && _g !== void 0 ? _g : (_h = defaults[String(logopt)]) === null || _h === void 0 ? void 0 : _h.dec) !== null && _j !== void 0 ? _j : undefined);
        if (addfg)
            add = (add !== null && add !== void 0 ? add : "") + "color: ".concat(addfg);
        if (addbg)
            add = (add !== null && add !== void 0 ? add : "") + (addfg ? "; " : "") + "background: ".concat(addbg);
        if (adddec)
            add = (add !== null && add !== void 0 ? add : "") + ((addfg || addbg) ? "; " : "") + adddec;
        var logoptions = {
            raw: {
                reg: /^@@raw/g,
                matched: Boolean()
            },
            c: {
                reg: /%%c/g,
                replace: "%c",
                matched: Boolean()
            }
        };
        Object.keys(logoptions).forEach(function (a) {
            var _a;
            var b = logoptions[a];
            b.matched = b.reg.test(logmsg_[i]);
            if (b.matched)
                logmsg_[i] = logmsg_[i].replace(b.reg, ((_a = b.replace) !== null && _a !== void 0 ? _a : ""));
        });
        if (add && (typeof logmsg_[i] === "string") && !logoptions.raw.matched) {
            parsedlog.push(((add && !logmsg_.includes("%c") && !logoptions.c.matched) ? "%c" : "") + logmsg_[i] + (add ? "" : ""));
            logcolors.push.apply(logcolors, __spreadArray([], __read(((add !== null && add !== void 0 ? add : undefined) ? [add] : [])), false));
        }
        else {
            unformattedlogs.push(logmsg_[i]);
        }
        ;
    };
    for (var i = 0; i < logmsg_.length; i++) {
        _loop_1(i);
    }
    ;
    var logopt_ = (["log", "info", "error", "debug"][[0, 1, 2, 3].at(parseInt(String(logopt)))]);
    function nicedate() {
        return new Date(new Date().setMinutes(new Date().getMinutes() - new Date().getTimezoneOffset())).toISOString().split(".")[0].replace("T", " ");
    }
    ;
    console[logopt_].apply(console, __spreadArray(__spreadArray(["%c [Ju] %c [".concat(nicedate(), "]") + (parsedlog[0] ? "\n" : "") + parsedlog.join(""), "color: #000; background: #00FFFF; font-weight: bold", "color: #9c9789; font-size: 8px"], __read(logcolors), false), __read(__spreadArray(__spreadArray([], __read(((typeof unformattedlogs[0] === "string") ? ["\n" + unformattedlogs[0]] : [unformattedlogs[0]])), false), __read(unformattedlogs.slice(1)), false)), false));
}
exports.logWeb = logWeb;
;
