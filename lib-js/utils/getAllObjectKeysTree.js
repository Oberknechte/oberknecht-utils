"use strict";
exports.__esModule = true;
exports.getAllObjectKeysTree = void 0;
function getAllObjectKeysTree(obj, parentkeynames) {
    if (!obj || typeof obj !== "object")
        return [];
    var keys = [];
    var _getobj = function (obj2) {
        Object.keys(obj2).forEach(function (o) {
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
