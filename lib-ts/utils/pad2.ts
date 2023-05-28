export function pad2(n: number | string): string {
    return `${(parseInt(`${n}`) <= 9 ? "0" : "")}${n}`;
};