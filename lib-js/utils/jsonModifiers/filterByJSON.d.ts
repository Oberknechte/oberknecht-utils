declare type advancedRulesType = {
    strictFiltering?: boolean;
    strictFilteringByKeys?: boolean;
    arrayStrictFiltering?: boolean;
    defaultReturnValue?: Record<string, any>;
    strictMatchingFailedCallback?: () => void;
};
export declare function filterByJson(object: Record<string, any>, targetObject: Record<string, any>, useExtendedTypes?: boolean, advancedRules?: advancedRulesType): Record<string, any>;
export {};
