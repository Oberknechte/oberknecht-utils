export function getFunctionArgumentNames(func: Function) {
  return func
    .toString()
    .split("\n")[0]
    .replace(/\s+/g, "")
    .replace(/^function\w+/, "")
    .replace(/^\(/, "")
    .split(")")[0]
    .split(/,/);
}
