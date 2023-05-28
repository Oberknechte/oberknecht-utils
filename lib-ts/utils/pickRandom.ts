export function pickRandom(items: Array<any>, n: Number | undefined) {
    return [...Array((n ?? 1))].map(() => {
        return items[Math.floor(Math.random() * items.length)];
    });
};