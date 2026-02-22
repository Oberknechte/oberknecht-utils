"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressUtils = void 0;
const extendedTypeof_1 = require("../extendedTypeof");
class expressUtils {
    constructor(options) { }
    sendRes(res, data, status) {
        let data_ = {};
        let status_ = status ?? 200;
        function getFullStack(error) {
            let stack = [error?.stack || ""];
            if (error?.cause) {
                stack.push(...getFullStack(error.cause));
            }
            return stack;
        }
        function getFullMessage(error) {
            let message = [error?.message || ""];
            if (error?.cause) {
                message.push(...getFullMessage(error.cause));
            }
            return message;
        }
        if (data?.error) {
            if ((0, extendedTypeof_1.extendedTypeof)(data.error) === "error") {
                data_.error = {
                    name: data.error.name,
                    message: data.error.message,
                    messageStack: getFullMessage(data.error),
                    stack: getFullStack(data.error),
                    isapierror: true,
                };
            }
            else {
                data_.error = {
                    message: data.error,
                    isapierror: true,
                };
            }
        }
        else {
            switch ((0, extendedTypeof_1.extendedTypeof)(data)) {
                case "error": {
                    data_.error = {
                        name: data.name,
                        message: data.message,
                        messageStack: getFullMessage(data),
                        stack: getFullStack(data),
                        isapierror: true,
                    };
                    if (status_ === undefined) {
                        status_ = 500;
                    }
                    break;
                }
                case "object":
                case "json": {
                    data_ = { ...data_, ...data };
                    break;
                }
                default: {
                    data_.data = data;
                }
            }
        }
        data_.status = status_;
        res.status(status_).json(data_);
    }
}
exports.expressUtils = expressUtils;
