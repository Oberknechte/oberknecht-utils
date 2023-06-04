export function getAllObjectKeysTree(obj: object, parentkeynames: boolean): string[] {
    if (!obj || typeof obj !== "object") return [];
    let keys: string[] = [];

    let _getobj = (obj2) => {
        Object.keys(obj2).forEach(o => {
            if (typeof obj2[o] === "object" && Object.keys(obj2[o])) {
                if (parentkeynames) keys.push(o);
                _getobj(obj2[o]);
            } else {
                keys.push(o);
            };
        });
    };

    _getobj(obj);

    return keys;
};