export function expectedEventName(eventName: string | any): string | undefined {
    if (!(eventName ?? undefined)) return undefined;

    const expectedeventnames = {
        "ping": "pong",
        "join": "353"
    };

    let eventName_ = eventName.toLowerCase();

    if (expectedeventnames[eventName_]) {
        return expectedeventnames[eventName_].toUpperCase();
    } else if (Object.values(expectedeventnames).includes(eventName_)) {
        return expectedeventnames[Object.values(expectedeventnames).indexOf(eventName_)].toUpperCase();
    };

    return eventName.toUpperCase();
};