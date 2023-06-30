type processArgEntry = {
    keys: string[];
    allowArgs?: boolean;
    argsLength?: number;
    args?: string[];
};
type processArgsType = Record<string, processArgEntry>;
export declare function parseProcessArgs(args: typeof process.argv, processArgs?: processArgsType): any;
export {};