import { dissolveArray, regexEscape } from ".";

export function joinString(
  pathParts: string | number | any[],
  joiner?: string,
  noreplace?: boolean,
  replaceStart?: boolean,
  replaceEnd?: boolean
): string {
  if (!pathParts) return "";
  const joiner_ = joiner ?? "";
  let r = "";

  r = (dissolveArray(pathParts as any[]) as string[]).join(joiner_);
  (() => {
    if (noreplace || joiner_.length === 0) return;
    const replaceReg = new RegExp(`${regexEscape(joiner_)}+`, "g");
    const replaceRegStart = new RegExp(`^${regexEscape(joiner_)}+`);
    const replaceRegEnd = new RegExp(`${regexEscape(joiner_)}+$`);

    r = r.replace(replaceReg, joiner_);
    if (replaceStart) r = r.replace(replaceRegStart, "");
    if (replaceEnd) r = r.replace(replaceRegEnd, "");
  })();

  return r;
}
