export function messageContent<stringInput extends string>(rawMessage: stringInput | undefined): stringInput extends string ? string : string | undefined {
    return rawMessage?.split(" ")?.slice(4)?.join(" ")?.replace(/(^:|^\s|\s$)/g, "")?.replace(/[\s]{2,}/g, " ") ?? undefined;
};