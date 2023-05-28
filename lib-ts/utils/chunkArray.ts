import { extendedTypeof } from "./extendedTypeof";

/** @see https://github.com/NuroC/moomoo-in-depth/tree/main/protocol#chunk-arrays */
export function chunkArray(arr: Array<any>, size: number | undefined): Array<any> {
    if (extendedTypeof(arr) !== "array") return [];

    size = (size ?? 10);
    let r: Array<any> = [];
    for (let i = 0; i < arr.length; i += size) r.push(arr.slice(i, i + size));
    return r;
};