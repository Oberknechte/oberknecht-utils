export function numberspacer(
  n: number | string,
  replacer: string
): string | undefined {
  if (!(n ?? undefined)?.toString() || !["number", "string"].includes(typeof n))
    return undefined;
  return n.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, replacer || " ");
}
