function numberspacer(n, replacer) {
    if (!(n ?? undefined)?.toString() || !["number", "string"].includes(typeof n)) return undefined;
    return n.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, replacer || " ");
};

module.exports = numberspacer;