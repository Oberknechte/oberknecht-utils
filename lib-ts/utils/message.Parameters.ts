export function messageParameters(
  rawMessage: string | any
): Record<string, string> {
  let parameters = {};
  if ((rawMessage ?? undefined) && rawMessage.startsWith("@"))
    rawMessage
      .split(" ")[0]
      .substring(1)
      .split(";")
      .forEach((a) => {
        return (parameters[a.split("=")[0]] = a.split("=")[1]);
      });
  return parameters;
}
