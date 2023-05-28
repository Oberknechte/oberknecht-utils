import { recreate } from "./recreate";

export function regexEscape(s: string): string {
    let r = recreate(s);
    let escapingRegex = ["\\", "/", "(", ")", "{", "}", "[", "]", "^", "$", ".", "*", "?", "+", "|"];

    escapingRegex.forEach(a => r = r.replaceAll(a, b => `\\${b}`));

    return r;
};