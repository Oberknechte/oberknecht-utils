import fs from "fs";
import { regex } from "../variables/regex";
import { mainPath } from ".";

export function rf(path: string, noautoparse?: boolean, throwErr?: boolean) {
  let path_ = /^\.+/.test(path) ? mainPath(path) : path;
  if (!fs.existsSync(path_)) {
    if (throwErr) throw Error(`path ${path_} does not exist`);
    return undefined;
  }

  let fileRaw = fs.readFileSync(path_, "utf-8");
  if (regex.jsonreg().test(fileRaw) && !noautoparse) return JSON.parse(fileRaw);
  return fileRaw;
}
