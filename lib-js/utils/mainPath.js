"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainPath = void 0;
const path_1 = __importDefault(require("path"));
const _1 = require(".");
function mainPath(dir) {
    return path_1.default.resolve(process.cwd(), ...(0, _1.convertToArray)(dir, false));
}
exports.mainPath = mainPath;
