export type errorMsgChecker = (cb: string) => {};

export function isConstructor(f, errorMsgChecker?: errorMsgChecker) {
    if (!f) return false;

    try {
        new f()
    } catch (e) {
        if (e.message && (errorMsgChecker ? errorMsgChecker(e.message) : (e.message === "response is undefined"))) return true;

        return false;
    };

    return true;
};