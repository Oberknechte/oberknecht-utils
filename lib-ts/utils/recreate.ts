import { regex } from "../variables/regex";

export function recreate(inp: any): any {
  switch (typeof inp) {
    case "boolean":
      return inp === true;
    case "number":
      return parseInt(`${inp}`);
    case "object": {
      if (Array.isArray(inp)) return [...inp];
      try {
        // @ts-ignore
        if (inp instanceof HTMLElement) return inp.cloneNode(true);
      } catch (nothin) {}
      if (regex.jsonreg().test(JSON.stringify(inp))) {
        let r = {};
        Object.keys(inp).forEach((key) => {
          r[key] = recreate(inp[key]);
        });

        return r;
      }
      return Object.assign({}, inp);
    }
    case "string":
      return `${inp}`;
    case "undefined":
      return undefined;
  }
}
