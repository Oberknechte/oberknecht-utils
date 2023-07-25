"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isConstructor = void 0;
function isConstructor(f, errorMsgChecker) {
    if (!f)
        return false;
    try {
        new f();
    }
    catch (e) {
        if (e.message &&
            (errorMsgChecker
                ? errorMsgChecker(e.message)
                : e.message === "response is undefined"))
            return true;
        return false;
    }
    return true;
}
exports.isConstructor = isConstructor;
