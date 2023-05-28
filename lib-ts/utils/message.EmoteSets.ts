export function messageEmoteSets(rawEmoteSets: string | any): Array<string> {
    return rawEmoteSets?.split(",") ?? [];
};