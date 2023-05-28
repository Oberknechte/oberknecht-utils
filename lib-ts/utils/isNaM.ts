export function isNaM(s: string | any): boolean | undefined {
    if(!(s ?? undefined)) return undefined;
    return /\W/gi.test(s);
};