export function getFunctionArgumentNames(func: Function) {
  return func
    .toString()
    .split("\n")[0]
    .replace(/^function\s\w+\(/, "")
    .split(")")[0]
    .split(/\s*,\s*/);
}
