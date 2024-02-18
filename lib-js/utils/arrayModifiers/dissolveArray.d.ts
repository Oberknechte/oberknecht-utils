declare type arrTypeReturn<T> = T extends any[] ? any : T;
export declare function dissolveArray<arrType extends Array<string | number | any>>(...arr: arrType): arrTypeReturn<arrType>[];
export {};
