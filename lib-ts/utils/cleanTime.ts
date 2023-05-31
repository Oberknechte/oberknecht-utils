import { extendedTypeof } from "./extendedTypeof";
import { pad2 } from "./pad2";
import { recreate } from "./recreate";

export function cleanTime(time: number /** time in ms */, timeopt: number, timedigits: number | "all" | "auto", noMs: boolean): {} {
    let timedigits_ = recreate(timedigits);
    // @ts-ignore
    if (!(timedigits_ ?? undefined) || (typeof timedigits_ !== "number" && timedigits_ !== "all") || timedigits <= 0) timedigits_ = "auto";
    let r: {} = { time: [], order: [], tag: "" };
    let t = {
        years: {
            tag_: "yr",
            tag: "year",
            conversion: 365 * 24 * 60 * 60 * 1000,
            time: 0,
        },
        weeks: { tag_: "wk", tag: "week", conversion: 7 * 24 * 60 * 60 * 1000, time: 0 },
        days: {
            tag_: "day",
            tag: "day",
            conversion: 24 * 60 * 60 * 1000,
            time: 0,
        },
        hours: { tag_: "hr", tag: "hour", conversion: 60 * 60 * 1000, time: 0 },
        minutes: { tag_: "min", tag: "minute", conversion: 60 * 1000, time: 0 },
        seconds: { tag_: "sec", tag: "second", conversion: 1000, time: 0 },
        milliseconds: { tag_: "ms", tag: "millisecond", conversion: 1, time: 0 },
    };
    t.milliseconds.time = time;
    for (let i = 0; i < (Object.keys(t).length - 1); i++) {
        t[Object.keys(t)[i]].time = Math.floor(t.milliseconds.time / t[Object.keys(t)[i]].conversion);
        t.milliseconds.time = t.milliseconds.time % t[Object.keys(t)[i]].conversion;
    }
    t.milliseconds.time = parseInt(t.milliseconds.time.toString().substring(0, 3));
    let ctlast;
    let u = 0;
    let autonum = 2;
    for (let i = 0; i < Object.keys(t).length; i++) {
        let tc = Object.keys(t)[i];
        let tco = t[tc];
        let cte: number = tco.time;
        if (((i !== (Object.keys(t).length - 1)) || !noMs) && (["auto"].includes(timedigits_) && (u < autonum)) || timedigits_ === "all" || timedigits_ > 0) {
            if (cte > 0) {
                if (!(ctlast ?? undefined)) r["tag"] = `${tco["tag"]}${cte > 1 ? "s" : ""}`;
                switch (timeopt) {
                    case 1:
                    case 2:
                    case 3: {
                        r["time"].push(pad2(cte));
                        r["order"].push(tc);
                        break;
                    };

                    case 4:
                    case 5: {
                        if (cte > 0) {
                            r["time"].push(`${cte} ${tco[["tag", "tag_"][timeopt - 4]] !== "ms" ? tco[["tag", "tag_"][timeopt - 4]] + (cte > 1 ? "s" : "") : tco[["tag", "tag_"][timeopt - 4]]}`);
                            r["order"].push(tc);
                        };
                        break;
                    };
                };

                if (extendedTypeof(timedigits_) === "number") timedigits_--;
                ctlast = cte;
                u++;
            };
        } else {
            i = Object.keys(t).length;
        };
    };

    return r;
};