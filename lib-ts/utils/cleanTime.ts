import { extendedTypeof } from "./extendedTypeof";
import { pad2 } from "./pad2";
import { recreate } from "./recreate";

export function cleanTime(
  time: number /** time in ms */,
  timeopt?: number,
  timedigits?: number | "all" | "auto",
  noMS?: boolean,
  noSpace?: boolean
): {} {
  let timedigits_ = recreate(timedigits);
  if (
    !(timedigits_ ?? undefined) ||
    (typeof timedigits_ !== "number" && timedigits_ !== "all") ||
    (timedigits as number) <= 0
  )
    timedigits_ = "auto";
  let r: Record<string, any> = { time: [], order: [], tag: "" };
  let t = {
    years: {
      tag3: "yr",
      tag2: "yr",
      tag: "year",
      conversion: 365 * 24 * 60 * 60 * 1000,
      time: 0,
    },
    weeks: {
      tag3: "wk",
      tag2: "wk",
      tag: "week",
      conversion: 7 * 24 * 60 * 60 * 1000,
      time: 0,
    },
    days: {
      tag3: "d",
      tag2: "day",
      tag: "day",
      conversion: 24 * 60 * 60 * 1000,
      time: 0,
    },
    hours: {
      tag3: "h",
      tag2: "hr",
      tag: "hour",
      conversion: 60 * 60 * 1000,
      time: 0,
    },
    minutes: {
      tag3: "m",
      tag2: "min",
      tag: "minute",
      conversion: 60 * 1000,
      time: 0,
    },
    seconds: {
      tag3: "s",
      tag2: "sec",
      tag: "second",
      conversion: 1000,
      time: 0,
    },
    milliseconds: {
      tag3: "ms",
      tag2: "ms",
      tag: "millisecond",
      conversion: 1,
      time: 0,
    },
  };
  t.milliseconds.time = time;
  for (let i = 0; i < Object.keys(t).length - 1; i++) {
    t[Object.keys(t)[i]].time = Math.floor(
      t.milliseconds.time / t[Object.keys(t)[i]].conversion
    );
    t.milliseconds.time = t.milliseconds.time % t[Object.keys(t)[i]].conversion;
  }
  t.milliseconds.time = parseInt(
    t.milliseconds.time.toString().substring(0, 3)
  );
  let ctlast;
  let u = 0;
  let autonum = 2;
  for (let i = 0; i < Object.keys(t).length; i++) {
    let tc = Object.keys(t)[i];
    let tco = t[tc];
    let cte: number = tco.time;
    if (
      ((i !== Object.keys(t).length - 1 || !noMS) &&
        ["auto"].includes(timedigits_) &&
        u < autonum) ||
      timedigits_ === "all" ||
      timedigits_ > 0
    ) {
      if (cte > 0) {
        if (!(ctlast ?? undefined))
          r["tag"] = `${tco["tag"]}${cte > 1 ? "s" : ""}`;
        switch (timeopt) {
          case 1:
          case 2:
          case 3: {
            r["time"].push(pad2(cte));
            r["order"].push(tc);
            break;
          }

          case 4:
          case 5:
          case 6: {
            if (cte > 0) {
              r["time"].push(
                `${cte} ${
                  tco[["tag", "tag2", "tag3"][timeopt - 4]] !== "ms" &&
                  timeopt - 4 !== 2
                    ? tco[["tag", "tag2", "tag3"][timeopt - 4]] +
                      (cte > 1 ? "s" : "")
                    : tco[["tag", "tag2", "tag3"][timeopt - 4]]
                }`
              );
              r["order"].push(tc);
            }
            break;
          }
        }

        if (extendedTypeof(timedigits_) === "number") timedigits_--;
        ctlast = cte;
        u++;
      }
    } else {
      i = Object.keys(t).length;
    }
  }

  if (r.time) r.time = r.time.map((a) => (noSpace ? a.replace(/\s/g, "") : a));

  return r;
}
