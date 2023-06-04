"use strict";
exports.__esModule = true;
exports.getByObjectFromTree = void 0;
function getByObjectFromTree(obj, key, searchmode, parentkeynames) {
    if (!obj || typeof obj !== "object" || !Object.keys(obj) || !(key !== null && key !== void 0 ? key : undefined))
        return undefined;
    searchmode = (searchmode !== null && searchmode !== void 0 ? searchmode : 0);
    var matches = [];
    var _getobj = function (obj2) {
        Object.keys(obj2).forEach(function (o) {
            var _a;
            function search(m) {
                switch (m) {
                    case 0: return (o === key);
                    case 1: return (o == key);
                    case 2: return (o.includes(key));
                    case 3: return (key.includes(o));
                    case 10: return (o.match(new RegExp("".concat(key))));
                    case 11: return (o.match(new RegExp("".concat(key), "i")));
                    case 15: return (key.match(new RegExp("".concat(o))));
                    case 16: return (key.match(new RegExp("".concat(o), "i")));
                }
                ;
            }
            ;
            if (((_a = obj2[o]) !== null && _a !== void 0 ? _a : undefined) && typeof obj2[o] === "object" && Object.keys(obj2[o])) {
                if (search(searchmode) && parentkeynames)
                    matches.push([obj2[o], obj2]);
                _getobj(obj2[o]);
            }
            else {
                if (search(searchmode))
                    matches.push([obj2[o], obj2]);
            }
            ;
        });
    };
    _getobj(obj);
    return matches;
}
exports.getByObjectFromTree = getByObjectFromTree;
;
