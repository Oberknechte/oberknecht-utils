function firstCap(s) {
    if (!(s ?? undefined) || typeof s !== "string") return undefined;
    return s.toString()[0].toUpperCase() + s.toString().slice(1);
};

module.exports = firstCap;