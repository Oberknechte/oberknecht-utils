export function messagePrefix(rawMessage: string | any): string | undefined {
    if (!(rawMessage ?? undefined)) return undefined;
    return rawMessage.split(" ").filter((v, i) => { return i <= 2 && /^:+(\w+\!\w+@\w+\.)*tmi\.twitch\.tv/g.test(v) })[0] || undefined;
};