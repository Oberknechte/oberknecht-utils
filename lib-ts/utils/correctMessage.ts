export function correctMessage(message: string | any): string {
  if (!(message ?? undefined)) return "";

  return message.trim().replace(/\s+/g, " ");
}
