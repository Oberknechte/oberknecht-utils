import { regex } from "../variables/regex";

export function recreate(inp: any): any {
    switch (typeof inp) {
        case "boolean": return (inp === true);
        case "number": return parseInt(`${inp}`);
        case "object": {
            if (Array.isArray(inp)) return [...inp];
            if (regex.jsonreg().test(JSON.stringify(inp))) return { ...inp };
            return Object.assign({}, inp);
        };
        case "string": return `${inp}`;
        case "undefined": return undefined;
    };
};