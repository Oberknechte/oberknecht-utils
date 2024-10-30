export const logColors = {
  reset: "0",
  bright: "1",
  dim: "2",
  underscore: "4",
  blink: "5",
  reverse: "7",
  hidden: "8",
  fgblack: "30",
  fgred: "31",
  fggreen: "32",
  fgyellow: "33",
  fgblue: "34",
  fgmagenta: "35",
  fgcyan: "36",
  fgwhite: "37",
  bgblack: "40",
  bgred: "41",
  bggreen: "42",
  bgyellow: "43",
  bgblue: "44",
  bgmagenta: "45",
  bgcyan: "46",
  bgwhite: "47",
} as const;

export const logColorValues = Object.values(logColors);
type logColorValueType = typeof logColorValues[number];

export type logOptConfigType = {
  option?: number;
  logColorFG?: logColorValueType;
  logColorBG?: logColorValueType;
  displayMS?: boolean;
  global?: boolean;
};
