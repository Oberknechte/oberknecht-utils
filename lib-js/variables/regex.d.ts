export declare class regex {
    static numregex: () => RegExp;
    static tokenreg: () => RegExp;
    static jsonreg: () => RegExp;
    static urlreg: () => RegExp;
    static extraSpaceRegex: () => RegExp;
    static twitch: {
        new (): {};
        message: {
            new (): {};
            action: () => RegExp;
        };
        usernamereg: () => RegExp;
        tokenreg: () => RegExp;
    };
}
