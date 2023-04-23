/** @param {Number?} min @param {Number?} max @param {Number?} add gets added to the randomized number @returns {Number?} */
function randomNum(min, max, add) {
    min = parseInt(min ?? 0);
    max = parseInt(max ?? 10);
    add = parseInt(add ?? 1);
    this.s = [min, max].sort((a, b) => {
        return (a - b);
    });

    return add + s[0] + Math.floor(Math.random() * (this.s[1] - this.s[0]));
};

module.exports = randomNum;