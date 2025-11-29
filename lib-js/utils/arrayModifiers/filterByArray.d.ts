export declare type advancedRulesArrayType = {
    filterStrict?: boolean;
    strictMatchingFailedCallback?: () => void;
    defaultReturnValue?: Array<any>;
};
export declare function filterByArray(array: Array<any>, targetArray: Array<any>, useExtendedTypes?: boolean, advancedRules?: advancedRulesArrayType): any[];
