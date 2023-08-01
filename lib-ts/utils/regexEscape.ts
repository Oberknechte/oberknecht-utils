import { recreate } from "./recreate";
import { escapingRegex } from "../types/regexEscape";

export function regexEscape(s: string): string {
  let r = recreate(s);

  escapingRegex.forEach((a) => (r = r.replaceAll(a, (b) => `\\${b}`)));

  return r;
}
