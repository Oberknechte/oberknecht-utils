import { convertToArray } from "./arrayModifiers/convertToArray";
import { extendedTypeof } from "./extendedTypeof";
import { isNullUndefined } from "./isNullUndefined";

export function returnOnNumber(
  input: string | Array<any> | Object | number | bigint,
  targetNumber: number,
  returnOnGreater: any,
  returnOnGreaterEquals: any,
  returnOnSmaller: any,
  returnOnSmallerEquals: any,
  returnDefault: any
): any {
  if (["null", "undefined"].includes(extendedTypeof(input))) return undefined;
  targetNumber = isNullUndefined(extendedTypeof(targetNumber))
    ? 2
    : targetNumber;

  let parsedSearchNumber;
  switch (extendedTypeof(input)) {
    case "string":
    case "array":
      parsedSearchNumber = convertToArray(input).length;
      break;
    case "json":
      parsedSearchNumber = Object.keys(input).length;
      break;
    case "number":
    case "bigint":
      parsedSearchNumber = input;
      break;
    default:
      return undefined;
  }

  if (!isNullUndefined(returnOnGreater) && parsedSearchNumber > targetNumber)
    return returnOnGreater;
  if (
    !isNullUndefined(returnOnGreaterEquals) &&
    parsedSearchNumber >= targetNumber
  )
    return returnOnGreaterEquals;
  if (!isNullUndefined(returnOnSmaller) && parsedSearchNumber < targetNumber)
    return returnOnSmaller;
  if (
    !isNullUndefined(returnOnSmallerEquals) &&
    parsedSearchNumber <= targetNumber
  )
    return returnOnSmallerEquals;

  return !isNullUndefined(returnDefault) ? returnDefault : "";
}
