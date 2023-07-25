export function messageContent(rawMessage: string | undefined): string {
  return (
    rawMessage
      ?.split(" ")
      ?.slice(4)
      ?.join(" ")
      ?.replace(/(^:|^\s|\s$)/g, "")
      ?.replace(/[\s]{2,}/g, " ") ?? ""
  );
}
