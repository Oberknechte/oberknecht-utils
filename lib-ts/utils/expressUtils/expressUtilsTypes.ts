export type expressUtilsOptionsType = {

}

export type expressUtilsAuthHandlerOptionsType = {
    excludePaths?: ((path: string) => boolean),
    authFailCallback?: (req: any, res: any, next: any) => void
}