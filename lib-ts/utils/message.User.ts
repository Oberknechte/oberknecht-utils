export function messageUser(rawMessage: string | any): string | undefined {
    let match = rawMessage?.match(/(?<=^:)\w+(?=!)/g);
    if (!(rawMessage ?? undefined) || !(match ?? undefined)) return undefined;
    return match?.[0];
};