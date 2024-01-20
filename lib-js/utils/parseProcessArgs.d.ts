declare type processArgEntry = {
    keys: string[];
    allowArgs?: boolean;
    argsLength?: number;
    args?: string[];
};
declare type processArgsType = Record<string, processArgEntry>;
export declare function parseProcessArgs(args: typeof process.argv, processArgs?: processArgsType): processArgsType;
export {};
