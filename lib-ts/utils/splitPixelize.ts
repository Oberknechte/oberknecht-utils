import { getFullNumber } from ".";

export function splitPixelize(
  str?: string,
  pixelIndex?: number,
  pixelChar?: string
): string | undefined {
  if (!str) return undefined;
  let str_ = str.split("");
  let pixelIndex_ = pixelIndex ?? getFullNumber(str_.length / 2);
  let pixelChar_ = pixelChar ?? "󠀀";

  return (
    str_.slice(0, pixelIndex_).join("") +
    pixelChar_ +
    str_.slice(pixelIndex_).join("")
  );
}
