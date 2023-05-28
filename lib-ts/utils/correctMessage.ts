export function correctMessage(message: string | any): string | undefined {
    if (!(message ?? undefined)) return undefined;

    return message.trim().replace(/\s+/g, " ");
};