function isNaM(s) {
    if(!(s ?? undefined)) return undefined;
    return /\W/gi.test(s);
};

module.exports = isNaM;