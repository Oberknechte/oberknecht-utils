"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wf = void 0;
const fs_1 = __importDefault(require("fs"));
const mainPath_1 = require("./mainPath");
const extendedTypeof_1 = require("./extendedTypeof");
const recreate_1 = require("./recreate");
function wf(path, data) {
    let path_ = /^\.+/.test(path) ? (0, mainPath_1.mainPath)(path) : path;
    let data_ = (0, recreate_1.recreate)(data);
    if (["json", "object"].includes((0, extendedTypeof_1.extendedTypeof)(data)))
        data_ = JSON.stringify(data);
    return fs_1.default.writeFileSync(path_, data_);
}
exports.wf = wf;
