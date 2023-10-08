"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByObjectFromTree = void 0;
function getByObjectFromTree(obj, key, searchmode, parentkeynames) {
    if (!obj ||
        typeof obj !== "object" ||
        !Object.keys(obj) ||
        !(key ?? undefined))
        return undefined;
    searchmode = searchmode ?? 0;
    let matches = [];
    let _getobj = (obj2) => {
        Object.keys(obj2).forEach((o) => {
            function search(m) {
                switch (m) {
                    case 0:
                        return o === key;
                    case 1:
                        return o == key;
                    case 2:
                        return o.includes(key);
                    case 3:
                        return key.includes(o);
                    case 10:
                        return o.match(new RegExp(`${key}`));
                    case 11:
                        return o.match(new RegExp(`${key}`, "i"));
                    case 15:
                        return key.match(new RegExp(`${o}`));
                    case 16:
                        return key.match(new RegExp(`${o}`, "i"));
                }
            }
            if ((obj2[o] ?? undefined) &&
                typeof obj2[o] === "object" &&
                Object.keys(obj2[o])) {
                if (search(searchmode) && parentkeynames)
                    matches.push([obj2[o], obj2]);
                _getobj(obj2[o]);
            }
            else {
                if (search(searchmode))
                    matches.push([obj2[o], obj2]);
            }
        });
    };
    _getobj(obj);
    return matches;
}
exports.getByObjectFromTree = getByObjectFromTree;
