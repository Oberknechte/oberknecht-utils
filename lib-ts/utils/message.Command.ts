export function messageCommand(rawMessage: string | undefined): string {
    if (!(rawMessage ?? undefined)) return "";
    let r = rawMessage.split(" ").filter(a => { return (/^[A-Z]+$/g.test(a)) })[0];
    if (!r) r = rawMessage.split(" ").filter(a => { return (/^[0-9]{3}$/g.test(a)) })[0];
    return r;
};