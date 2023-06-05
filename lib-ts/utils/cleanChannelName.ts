import { recreate } from "./recreate";

export function cleanChannelName<channelType extends string>(channel?: channelType | undefined): channelType extends string ? string : undefined {
    if (!(channel ?? undefined)) return undefined;
    return recreate(channel.toString()).trim().replace(/^#/g, "");
};