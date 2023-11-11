"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectParent = void 0;
function selectParent(obj, parentKeys, parentCount_) {
    let parentCount = parentCount_ ?? 1;
    if (parentCount > 1) {
        return selectParent(actualSelectParent(), parentKeys, parentCount - 1);
    }
    function actualSelectParent() {
        // @ts-ignore
        return obj[parentKeys?.[parentCount - 1] ?? parentKeys];
    }
    return actualSelectParent();
}
exports.selectParent = selectParent;
