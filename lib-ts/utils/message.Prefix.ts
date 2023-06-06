export function messagePrefix(rawMessage: string | any): string {
    if (!(rawMessage ?? undefined)) return "";
    return rawMessage.split(" ").filter((v, i) => { return i <= 2 && /^:+(\w+\!\w+@\w+\.)*tmi\.twitch\.tv/g.test(v) })[0] ?? "";
};