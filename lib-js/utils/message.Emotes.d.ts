export declare type messageEmote = {
    id: string;
    start: number;
    end: number;
};
export declare type messageEmotesReturn = Array<messageEmote>;
export declare function messageEmotes(rawEmotes: string): messageEmotesReturn;
