"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renameKey = void 0;
function renameKey(o, oldName, newName) {
    if (!o || !oldName || !newName)
        return undefined;
    o[newName] = o[oldName];
    delete o[oldName];
    return o;
}
exports.renameKey = renameKey;
