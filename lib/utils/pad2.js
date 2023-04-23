function pad2(n) {
    return n <= 9 ? `0${n}` : n;
};

module.exports = pad2;