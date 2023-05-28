"use strict";
exports.__esModule = true;
exports.expectedEventName = void 0;
function expectedEventName(eventName) {
    if (!(eventName !== null && eventName !== void 0 ? eventName : undefined))
        return undefined;
    var expectedeventnames = {
        "ping": "pong",
        "join": "353"
    };
    var eventName_ = eventName.toLowerCase();
    if (expectedeventnames[eventName_]) {
        return expectedeventnames[eventName_].toUpperCase();
    }
    else if (Object.values(expectedeventnames).includes(eventName_)) {
        return expectedeventnames[Object.values(expectedeventnames).indexOf(eventName_)].toUpperCase();
    }
    ;
    return eventName.toUpperCase();
}
exports.expectedEventName = expectedEventName;
;
