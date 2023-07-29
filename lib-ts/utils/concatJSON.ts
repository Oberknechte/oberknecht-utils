export function concatJSON(arr: Record<string, any>[]) {
  let r = {};
  arr.forEach((a) => {
    Object.keys(a).forEach((b) => {
      r[b] = a[b];
    });
  });

  return r;
}
