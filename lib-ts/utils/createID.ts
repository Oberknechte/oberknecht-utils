export function randomId(length?: number) {
    let length_ = (length ?? 5);
    let r = "";
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_";
    for (let i = 0; i < length_; i++) {
        r += chars.charAt(Math.floor(Math.random() * chars.length));
    };

    return r;
};