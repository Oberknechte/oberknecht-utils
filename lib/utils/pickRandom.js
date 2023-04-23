/** @param {Array} items @param {Number?} number */
function pickRandom(items, number) {
    if ((number ?? 1) === 1) return items[Math.floor(Math.random() * items.length)];
    let r = [];
    for (i = 0; i < number; i++) r.push(items[Math.floor(Math.random() * items.length)]);
    return r;
};

module.exports = pickRandom;