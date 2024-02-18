"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.joinValues = void 0;
const _1 = require(".");
function joinValues(values, typesOverride) {
    let values_ = (0, _1.convertToArray)(values);
    let r = values_[0];
    values_.slice(1).forEach((value) => {
        if (!typesOverride && (0, _1.extendedTypeof)(value) !== (0, _1.extendedTypeof)(r))
            return;
        if ((0, _1.extendedTypeof)(value) !== (0, _1.extendedTypeof)(r))
            return (r = value);
        switch ((0, _1.extendedTypeof)(value)) {
            case "json": {
                let jsonpaths = (0, _1.getKeyArraysFromObject)(value);
                jsonpaths.forEach((a) => {
                    (0, _1.addKeysToObject)(r, a.path, a.value);
                });
                break;
            }
            case "array": {
                r.push(...(0, _1.convertToArray)(value, false));
                break;
            }
            case "string":
            case "number":
            case "bigint": {
                r += value;
                break;
            }
        }
    });
    return r;
}
exports.joinValues = joinValues;
