"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.push = void 0;
function push(arr, items, maxSize) {
    if (maxSize && arr.length + items.length > maxSize)
        arr.splice(0, arr.length - items.length - maxSize + 2);
    arr.push(...items);
    return arr;
}
exports.push = push;
