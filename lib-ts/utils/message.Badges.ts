export type BadgesMap = Record<string, string>;

export function messageBadges(badges: string): BadgesMap {
    let r = {};
    badges?.split(",")?.forEach(a => r[a.split("/")[0]] = a.split("/")[1]);
    return r;
};