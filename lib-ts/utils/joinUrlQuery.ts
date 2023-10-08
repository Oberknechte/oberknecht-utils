import { convertToArray } from "./arrayModifiers/convertToArray";

export function joinUrlQuery(
  queryname: string | Array<string>,
  queryparams: string | Array<string | string[]>,
  firstquery?: boolean,
  appendifempty?: boolean
) {
  let queryname_ = convertToArray(queryname, false);
  let queryparams_ = convertToArray(queryparams, false);

  let _join = (name: string, params: Array<string>): string | undefined =>
    convertToArray(params, false).length > 0 || appendifempty
      ? `${name}=${convertToArray(params, false).join(`&${name}=`)}`
      : undefined;

  if (queryparams_.length == 0) return "";

  let r = `${firstquery ? "?" : "&"}`;
  r +=
    queryname_.length === 1
      ? _join(queryname_[0], queryparams_)
      : `${queryname_
          .map((v, i) => _join(v, queryparams_[i]))
          .filter((a) => a)
          .join("&")}`;

  return r;
}
