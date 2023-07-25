import { extendedTypes } from "../types/extendedTypes";
export declare function returnOnType<returnIfTypeInput extends any, returnElseInput extends any>(input: any, types_: extendedTypes | extendedTypes[], returnIfType?: returnIfTypeInput, returnElse?: returnElseInput): returnIfTypeInput | returnElseInput | undefined;
