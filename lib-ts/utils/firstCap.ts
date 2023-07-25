import { extendedTypeof } from "./extendedTypeof";

export function firstCap(s: string): string | undefined {
  if (!["string", "number"].includes(extendedTypeof(s))) return undefined;
  return s.length > 0
    ? s.toString()?.[0].toUpperCase() + s.toString().slice(1)
    : "";
}
