"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sleep = void 0;
async function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time ?? 1000));
}
exports.sleep = sleep;
