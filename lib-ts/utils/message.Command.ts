export function messageCommand(rawMessage: string | any): string | undefined {
    if (!(rawMessage ?? undefined)) return undefined;
    let r = rawMessage.split(" ").filter(a => { return (/^[A-Z]+$/g.test(a)) })[0];
    if (!r) r = rawMessage.split(" ").filter(a => { return (/^[0-9]{3}$/g.test(a)) })[0];
    return r;
};