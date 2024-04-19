export type messageEmote = {
    id: string;
    start: number;
    end: number;
};
export type messageEmotesReturn = Array<messageEmote>;
export declare function messageEmotes(rawEmotes: string): messageEmotesReturn;
