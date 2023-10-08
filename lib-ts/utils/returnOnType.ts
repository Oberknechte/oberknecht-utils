import { extendedTypes } from "../types/extendedTypes";
import { extendedTypeof } from "./extendedTypeof";
import { convertToArray } from "./arrayModifiers/convertToArray";

export function returnOnType<
  returnIfTypeInput extends any,
  returnElseInput extends any
>(
  input: any,
  types_: extendedTypes | extendedTypes[],
  returnIfType?: returnIfTypeInput,
  returnElse?: returnElseInput
): returnIfTypeInput | returnElseInput | undefined {
  let types = convertToArray(types_, false);
  if (types.includes(extendedTypeof(input))) return returnIfType;
  else return returnElse;
}
