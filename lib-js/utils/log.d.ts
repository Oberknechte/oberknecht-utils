import { logOptConfigType } from "../types/log";
declare const logOpts: number[];
declare type logOptsType = typeof logOpts[number];
export declare function log(logOpt: logOptConfigType | logOptsType | any, ...logMsg: any): void;
export {};
