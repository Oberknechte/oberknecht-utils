export function messageEmotes(rawEmotes: string) {
    if (!(rawEmotes ?? undefined)) return [];
    return rawEmotes.split(",").map(a => {
        return a.split(":")[0];
    });
};