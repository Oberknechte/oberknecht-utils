"use strict";
exports.__esModule = true;
exports.cleanTime = void 0;
var extendedTypeof_1 = require("./extendedTypeof");
var pad2_1 = require("./pad2");
var recreate_1 = require("./recreate");
function cleanTime(time /** time in ms */, timeopt, timedigits, noMs) {
    var timedigits_ = (0, recreate_1.recreate)(timedigits);
    // @ts-ignore
    if (!(timedigits_ !== null && timedigits_ !== void 0 ? timedigits_ : undefined) || (typeof timedigits_ !== "number" && timedigits_ !== "all") || timedigits <= 0)
        timedigits_ = "auto";
    var r = { time: [], order: [], tag: "" };
    var t = {
        years: {
            tag_: "yr",
            tag: "year",
            conversion: 365 * 24 * 60 * 60 * 1000,
            time: 0
        },
        weeks: { tag_: "wk", tag: "week", conversion: 7 * 24 * 60 * 60 * 1000, time: 0 },
        days: {
            tag_: "day",
            tag: "day",
            conversion: 24 * 60 * 60 * 1000,
            time: 0
        },
        hours: { tag_: "hr", tag: "hour", conversion: 60 * 60 * 1000, time: 0 },
        minutes: { tag_: "min", tag: "minute", conversion: 60 * 1000, time: 0 },
        seconds: { tag_: "sec", tag: "second", conversion: 1000, time: 0 },
        milliseconds: { tag_: "ms", tag: "millisecond", conversion: 1, time: 0 }
    };
    t.milliseconds.time = time;
    for (var i = 0; i < (Object.keys(t).length - 1); i++) {
        t[Object.keys(t)[i]].time = Math.floor(t.milliseconds.time / t[Object.keys(t)[i]].conversion);
        t.milliseconds.time = t.milliseconds.time % t[Object.keys(t)[i]].conversion;
    }
    t.milliseconds.time = parseInt(t.milliseconds.time.toString().substring(0, 3));
    var ctlast;
    var u = 0;
    var autonum = 2;
    for (var i = 0; i < Object.keys(t).length; i++) {
        var tc = Object.keys(t)[i];
        var tco = t[tc];
        var cte = tco.time;
        if (((i !== (Object.keys(t).length - 1)) || !noMs) && (["auto"].includes(timedigits_) && (u < autonum)) || timedigits_ === "all" || timedigits_ > 0) {
            if (cte > 0) {
                if (!(ctlast !== null && ctlast !== void 0 ? ctlast : undefined))
                    r["tag"] = "".concat(tco["tag"]).concat(cte > 1 ? "s" : "");
                switch (timeopt) {
                    case 1:
                    case 2:
                    case 3:
                        {
                            r["time"].push((0, pad2_1.pad2)(cte));
                            r["order"].push(tc);
                            break;
                        }
                        ;
                    case 4:
                    case 5:
                        {
                            if (cte > 0) {
                                r["time"].push("".concat(cte, " ").concat(tco[["tag", "tag_"][timeopt - 4]] !== "ms" ? tco[["tag", "tag_"][timeopt - 4]] + (cte > 1 ? "s" : "") : tco[["tag", "tag_"][timeopt - 4]]));
                                r["order"].push(tc);
                            }
                            ;
                            break;
                        }
                        ;
                }
                ;
                if ((0, extendedTypeof_1.extendedTypeof)(timedigits_) === "number")
                    timedigits_--;
                ctlast = cte;
                u++;
            }
            ;
        }
        else {
            i = Object.keys(t).length;
        }
        ;
    }
    ;
    return r;
}
exports.cleanTime = cleanTime;
;
