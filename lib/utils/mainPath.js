const path = require("path");

function mainPath(dir) {
    return path.resolve(process.cwd(), (dir ?? ""));
};

module.exports = mainPath;