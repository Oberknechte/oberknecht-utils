import { expressUtilsOptionsType } from "./expressUtilsTypes";
export declare class expressUtils {
    constructor(options: expressUtilsOptionsType);
    sendRes(res: any, data: any, status?: number): void;
}
