import { isNullUndefined } from ".";
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_";
const usedIDs = [];
let patternIDs = [];

export function createID(
  length?: number,
  preventDuplicates?: boolean,
  byPattern?: boolean,
  patternID_?: number[]
) {
  let preventDuplicates_ = !isNullUndefined(preventDuplicates)
    ? preventDuplicates
    : true;

  let byPattern_ = !isNullUndefined(byPattern) ? byPattern : false;
  patternIDs = patternID_ ?? patternIDs;

  let length_ = length ?? 5;
  let r = "";

  function actualCreateID() {
    if (usedIDs.length >= (chars.length ^ length_)) length_++;

    let r2 = "";
    for (let i = 0; i < length_; i++) {
      r2 += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    if (preventDuplicates_ && usedIDs.includes(r2)) return actualCreateID();
    if (!usedIDs.includes(r2)) usedIDs.push(r2);
    r = r2;
  }

  function getCharByNum(n: number) {
    return chars[n];
  }

  function actualCreatePatternID() {
    if (patternIDs.length === 0) patternIDs = [...Array(length_)].map((a) => 0);

    if (patternIDs.at(-1) >= chars.length) {
      patternIDs[patternIDs.length - 1] = chars.length - 1;
      let foundInPrevious;
      for (let i = patternIDs.length; i > 0; i--) {
        if (patternIDs[i] < chars.length - 1) {
          foundInPrevious = i;
          patternIDs[i]++;
          patternIDs
            .map((a, i2) => [a, i2])
            .slice(i + 1)
            .forEach((a) => (patternIDs[a[1]] = 0));
          break;
        }
      }

      if (!foundInPrevious) {
        patternIDs.push(0);
        patternIDs.forEach((a, i) => (patternIDs[i] = 0));
      }
    }

    patternIDs.forEach((a) => (r += getCharByNum(a)));
    patternIDs[patternIDs.length - 1]++;
  }

  if (!byPattern_) actualCreateID();
  else actualCreatePatternID();

  return r;
}
