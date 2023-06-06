export function correctChannelName<channelinput extends string>(channel: channelinput | undefined): channelinput extends string ? string : string | undefined {
    if (!(channel ?? undefined)) return undefined;
    return `#${channel.toLowerCase().trim().replace(/^#/g, "")}`
};