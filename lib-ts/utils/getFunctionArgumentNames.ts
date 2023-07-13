export function getFunctionArgumentNames(func: Function) {
  return func
    .toString()
    .split("\n")[0]
    .replace(/\s+/g, "")
    .replace(/^function\w+\(/, "")
    .split(")")[0]
    .split(/,/);
}
