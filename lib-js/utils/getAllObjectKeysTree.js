"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllObjectKeysTree = void 0;
function getAllObjectKeysTree(obj, parentkeynames) {
    if (!obj || typeof obj !== "object")
        return [];
    let keys = [];
    let _getobj = (obj2) => {
        Object.keys(obj2).forEach(o => {
            if (typeof obj2[o] === "object" && Object.keys(obj2[o])) {
                if (parentkeynames)
                    keys.push(o);
                _getobj(obj2[o]);
            }
            else {
                keys.push(o);
            }
            ;
        });
    };
    _getobj(obj);
    return keys;
}
exports.getAllObjectKeysTree = getAllObjectKeysTree;
;
