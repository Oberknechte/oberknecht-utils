"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.mainPath = void 0;
var path_1 = __importDefault(require("path"));
function mainPath(dir) {
    return path_1["default"].resolve(process.cwd(), (dir !== null && dir !== void 0 ? dir : ""));
}
exports.mainPath = mainPath;
;
