import { isNullUndefined, recreate } from "../";
import { splice } from "./splice";

export function moveByIndex(
  arr: any[],
  indexFirst: number,
  indexEnd?: number | undefined,
  moveNumber?: number | undefined
): any[] {
  if (
    !arr ||
    isNullUndefined(indexFirst) ||
    (isNullUndefined(indexEnd) && isNullUndefined(moveNumber))
  )
    return arr;

  if (isNullUndefined(indexEnd) && moveNumber)
    indexEnd = indexFirst + moveNumber;
  let isPositiveDirection = indexEnd > indexFirst;

  let r = recreate(arr);
  let elem = arr[indexFirst];
  let arr_ = splice(r, indexFirst);
  r = [
    ...arr_.slice(0, isPositiveDirection ? indexFirst + 1 : indexEnd),
    elem,
    ...arr_.slice(indexEnd),
  ];

  return r;
}
