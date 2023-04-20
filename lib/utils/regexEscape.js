const recreate = require("./recreate");

function regexEscape(s) {
    let r = recreate(s);
    let escapingRegex = ["\\", "/", "(", ")", "{", "}", "[", "]", "^", "$", ".", "*", "?", "+", "|"];

    escapingRegex.forEach(a => r = r.replaceAll(a, b => `\\${b}`));

    return r;
};

module.exports = regexEscape;