export function correctChannelName(channel: string | any): string | undefined {
    if (!(channel ?? undefined)) return undefined;
    return `#${channel.toLowerCase().trim().replace(/^#/g, "")}`
};