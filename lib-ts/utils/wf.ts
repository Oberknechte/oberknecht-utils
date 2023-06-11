import fs from "fs";
import { mainPath } from "./mainPath";
import { extendedTypeof } from "./extendedTypeof";
import { recreate } from "./recreate";

export function wf(path: string, data: any) {
  let path_ = /^\.+/.test(path) ? mainPath(path) : path;

  let data_ = recreate(data);
  if (["json", "object"].includes(extendedTypeof(data)))
    data_ = JSON.stringify(data);

  return fs.writeFileSync(path_, data_);
}
