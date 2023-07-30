import { isNullUndefined } from ".";
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_";
const usedIDs = [];

export function createID(length_?: number, preventDuplicates_?: boolean) {
  let preventDuplicates = !isNullUndefined(preventDuplicates_)
    ? preventDuplicates_
    : true;

  let length = length_ ?? 5;
  let r = "";

  function actualCreateID() {
    if (usedIDs.length >= (chars.length ^ length)) length++;

    let r2 = "";
    for (let i = 0; i < length; i++) {
      r2 += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    if (preventDuplicates && usedIDs.includes(r2)) return actualCreateID();
    usedIDs.push(r2);
    r = r2;
  }

  actualCreateID();

  return r;
}
