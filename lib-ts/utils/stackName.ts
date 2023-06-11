import { extendedTypeof, staticSpacer } from ".";

export type stackNameReturnType = [string, string[], string[], string];

export function stackName(): stackNameReturnType {
  let opt = [...arguments][0];
  let staticSpacerWidth =
    extendedTypeof([...arguments][1]) === "number" ? [...arguments][1] : 2;
  let args = [...arguments];
  if ((opt ?? undefined) && !isNaN(opt)) args.shift();
  if (staticSpacerWidth === [...arguments][1]) args.shift();

  let stackret = args.map((a) => {
    if (typeof a === "string") {
      return `[${a.toUpperCase()}]`;
    } else {
      return `nameerr`;
    }
  });
  let stackcolor = stackret.some((s2) => {
    return s2 == "[ERROR]";
  })
    ? "\x1b[4;31m"
    : "\x1b[4;1;36m";

  switch (opt) {
    default: {
      return [
        stackret.join(" "),
        stackret,
        stackret.map((s) => {
          return staticSpacer(staticSpacerWidth, s, stackcolor);
        }),
        stackret
          .map((s) => {
            return staticSpacer(staticSpacerWidth, s, stackcolor);
          })
          .join(" "),
      ];
    }

    case 1: {
      return [
        stackret.join(" "),
        stackret,
        stackret.map((s) => {
          return staticSpacer(staticSpacerWidth, s);
        }),
        stackret
          .map((s) => {
            return staticSpacer(staticSpacerWidth, s);
          })
          .join(" "),
      ];
    }
  }
}
