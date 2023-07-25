"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pickRandom = void 0;
function pickRandom(items, n) {
    return [...Array(n ?? 1)].map(() => {
        return items[Math.floor(Math.random() * items.length)];
    });
}
exports.pickRandom = pickRandom;
