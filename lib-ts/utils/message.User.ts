export function messageUser<usertype extends string>(
  rawMessage: usertype | undefined
): usertype extends string ? string : string | undefined {
  let match = rawMessage?.match(/(?<=^:)\w+(?=!)/g);
  if (!(rawMessage ?? undefined) || !(match ?? undefined)) return undefined;
  return match?.[0];
}
