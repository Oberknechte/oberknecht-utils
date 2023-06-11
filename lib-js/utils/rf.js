"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rf = void 0;
const fs_1 = __importDefault(require("fs"));
const regex_1 = require("../variables/regex");
const _1 = require(".");
function rf(path, noautoparse, throwErr) {
    let path_ = /^\.+/.test(path) ? (0, _1.mainPath)(path) : path;
    if (!fs_1.default.existsSync(path_)) {
        if (throwErr)
            throw Error(`path ${path_} does not exist`);
        return undefined;
    }
    let fileRaw = fs_1.default.readFileSync(path_, "utf-8");
    if (regex_1.regex.jsonreg().test(fileRaw) && !noautoparse)
        return JSON.parse(fileRaw);
    return fileRaw;
}
exports.rf = rf;
