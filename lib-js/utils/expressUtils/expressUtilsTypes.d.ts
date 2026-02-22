export declare type expressUtilsOptionsType = {};
export declare type expressUtilsAuthHandlerOptionsType = {
    excludePaths?: ((path: string) => boolean);
    authFailCallback?: (req: any, res: any, next: any) => void;
};
