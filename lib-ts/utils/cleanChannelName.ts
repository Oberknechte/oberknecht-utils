export function cleanChannelName(channel: string): string {
    return channel.toString().trim().replace(/^#/g, "");
};