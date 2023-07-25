"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expectedEventName = void 0;
function expectedEventName(eventName) {
    if (!(eventName ?? undefined))
        return undefined;
    const expectedeventnames = {
        ping: "pong",
        join: "353",
    };
    let eventName_ = eventName.toLowerCase();
    if (expectedeventnames[eventName_]) {
        return expectedeventnames[eventName_].toUpperCase();
    }
    else if (Object.values(expectedeventnames).includes(eventName_)) {
        return expectedeventnames[Object.values(expectedeventnames).indexOf(eventName_)].toUpperCase();
    }
    return eventName.toUpperCase();
}
exports.expectedEventName = expectedEventName;
