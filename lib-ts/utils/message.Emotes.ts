export type messageEmote = {
    "start": number,
    "end": number
};

export type messageEmotesReturn = Record<string, messageEmote>;

export function messageEmotes(rawEmotes: string): messageEmotesReturn {
    if (!(rawEmotes ?? undefined)) return {};
    let r = {};
    rawEmotes?.split(",")?.forEach(a => {
        let b = a.split(":");
        let c = b?.[1]?.split("-");
        if (c?.[1]) return {};
        r[b[0]] = {
            "start": c[0],
            "end": c[1]
        };
    });

    return r;
};