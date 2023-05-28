import { log } from "./log";

export function returnErr(e: Error | Object, logerr?: Boolean, fullstack?: Boolean) {
    if (!e) return "";
    // @ts-ignore
    let r2 = (e?.error ?? e);
    let r = "";
    let rfull = "";
    if (r2.stack) {
        let appendStack = (e2) => {
            r += ((r.length > 0 ? " (caused by:) " : "") + (e2?.message ?? e2));
            rfull += (rfull.length > 0 ? "\nCause: " : "") + (e2?.stack ?? e2);
            if (e2?.cause) return appendStack(e2.cause);

            return;
        };

        appendStack(r2);
    };

    if (logerr) log(2, r);
    return (fullstack ? rfull : r);
};