import { getFullNumber, isEvan } from ".";

export function createPyramid(n_: number, s: string) {
  let r: string = "";
  let n = isEvan(n_) ? n_ + 1 : n_;
  let half = getFullNumber(n / 2);

  for (let i = 1; i < n + 1; i++) {
    if (i > 1) r += "\n";
    if (i < half) {
      r += s.repeat(i);
    } else if (i === half) {
      r += s.repeat(half);
    } else {
      r += s.repeat(n + 1 - i);
    }
  }

  return r;
}
