import { getFullNumber, isEvan, regex } from ".";

export function createPyramid(n_: number, s: string): string[] {
  let r: string[] = [];
  let n__ =
    n_ && regex.numregex().test(n_.toString()) ? parseInt(n_.toString()) : n_;
  let n = n__ ? (isEvan(n__) ? n__ + 1 : n__) : 5;
  let half = getFullNumber(n / 2);

  for (let i = 1; i < n + 1; i++) {
    if (i < half) {
      r.push(s.repeat(i));
    } else if (i === half) {
      r.push(s.repeat(half));
    } else {
      r.push(s.repeat(n + 1 - i));
    }
  }

  return r;
}
