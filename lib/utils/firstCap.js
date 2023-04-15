const extendedTypeof = require("./extendedTypeof");

function firstCap(s) {
    if (!["string", "number"].includes(extendedTypeof(s))) return undefined;
    return (s.length > 0 ? s.toString()?.[0].toUpperCase() + s.toString().slice(1) : "");
};

module.exports = firstCap;