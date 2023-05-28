import { recreate } from "./recreate";

// export function convertToArray(arr: Array<any> | any, returnundefined?: boolean | any) {
export function convertToArray<returnundefinedBoolean extends boolean>(arr: Array<any> | any, returnundefined?: returnundefinedBoolean | undefined): returnundefinedBoolean extends true ? Array<any> | undefined : Array<any> {
    let arr_ = recreate(arr);
    if (!(arr_ ?? undefined)) return (returnundefined ? undefined as any : []);
    return (!Array.isArray(arr_) ? [arr_] : arr_);
};