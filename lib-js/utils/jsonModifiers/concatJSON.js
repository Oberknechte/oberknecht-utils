"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concatJSON = void 0;
const __1 = require("..");
function concatJSON(arr, addAppendTypes, typesOverride) {
    let arr_ = (0, __1.convertToArray)(arr);
    let r = {};
    let addAppendTypes_ = (0, __1.convertToArray)(addAppendTypes);
    arr_.forEach((a) => {
        function appendObj(obj, obj2) {
            Object.keys(obj2).forEach((b) => {
                if ((0, __1.extendedTypeof)(obj[b]) === "json" &&
                    (0, __1.extendedTypeof)(obj2[b]) === "json")
                    return appendObj(obj[b], obj2[b]);
                if (!(0, __1.isNullUndefined)(addAppendTypes) &&
                    (0, __1.extendedTypeof)(obj[b]) === (0, __1.extendedTypeof)(obj2[b]) &&
                    (addAppendTypes === true ||
                        addAppendTypes_.includes((0, __1.extendedTypeof)(obj[b]))))
                    return (obj[b] = (0, __1.joinValues)([obj[b], obj2[b]], typesOverride));
                obj[b] = obj2[b];
            });
        }
        appendObj(r, a);
    });
    return r;
}
exports.concatJSON = concatJSON;
