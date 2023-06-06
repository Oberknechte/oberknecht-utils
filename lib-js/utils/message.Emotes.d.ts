export type messageEmote = {
    "start": number;
    "end": number;
};
export type messageEmotesReturn = Record<string, messageEmote>;
export declare function messageEmotes(rawEmotes: string): messageEmotesReturn;
