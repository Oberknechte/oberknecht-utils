"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareJSONs = void 0;
function compareJSONs(...jsons) {
    let jsonArrays = [];
    function app(o, arr) {
        Object.keys(o).forEach((a) => {
            // @ts-ignore
            if (typeof o[a] === "object" && Object.keys(o[a] > 0))
                return app(o[a], [...arr, a]);
            jsonArrays.push([...arr, o[a]].join("\u0001"));
        });
    }
    jsons.forEach((a) => app(a, []));
    console.log(jsonArrays);
    console.log(jsonArrays.map((a) => jsonArrays[0].join() === a.join()));
    return (jsonArrays.map((a) => jsonArrays[0] === a).filter((a) => !a).length === 0);
}
exports.compareJSONs = compareJSONs;
