import { concatJSON, extendedTypeof, getDateParsed } from ".";
import { logOptConfigType } from "../types/log";

const maxGlobalLogs = 100;

const casecolors = {
  fg: { "0": "", "1": "30", "2": "41" },
  bg: { "0": "", "1": "43", "2": "41" },
};

const logOpts = [0, 1, 2];
type logOptsType = typeof logOpts[number];

export function log(
  logOpt: logOptConfigType | logOptsType | any,
  ...logMsg: any
): void {
  let logOptOption = logOpt?.option ?? (logOpts.includes(logOpt) ? logOpt : 0);

  let logOpt_: logOptConfigType = {
    option: logOptOption,
    logColorFG: logOpt?.logColorFG ?? casecolors.fg[logOptOption] ?? "0",
    logColorBG: logOpt?.logColorBG ?? casecolors.bg[logOptOption] ?? "0",
    displayMS: logOpt?.displayMS ?? true,
    global: logOpt?.global ?? false,
  };

  let logMsg_ = [...logMsg];

  if (
    (extendedTypeof(logOpt) !== "json" ||
      (!logOpt.option && !logOpt.logColorFG && !logOpt.logColorBG)) &&
    !logOpts.includes(logOpt)
  )
    logMsg_.unshift(logOpt);

  if (logOpt_.global)
    [(global.logs[String(logOptOption)], global.logs.all)].forEach((a) => {
      a = concatJSON(
        Object.keys(a ?? {})
          .slice(0, maxGlobalLogs)
          .map((b) => {
            return { [b]: a[b] };
          })
      );
    });

  if (logOpt_.global && global.logs)
    global.logs.all[Date.now()] = global.logs[String(logOpt)][Date.now()] = [
      logOpt_,
      logMsg_?.map((a) => {
        if (typeof a === "string") return a?.replace(/\x1b\[[\w;]+m/g, "");
        return a;
      }),
      getDateParsed(undefined, logOpt_.displayMS),
    ];

  const logcolorfg = `\x1b[${logOpt_.logColorFG}m`;
  const logcolorbg = `\x1b[${logOpt_.logColorBG}m`;

  const logm = [
    `${logcolorbg}${logcolorfg} ${getDateParsed(
      undefined,
      logOpt_.displayMS
    )} \x1b[0m >`,
    ...logMsg_,
  ];

  switch (logOptOption) {
    default:
    case 0:
      return console.log(...logm);
    case 1:
      return console.info(...logm);
    case 2:
      return console.error(...logm);
  }
}
