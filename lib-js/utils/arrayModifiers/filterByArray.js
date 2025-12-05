"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterByArray = void 0;
const extendedTypeof_1 = require("../extendedTypeof");
const filterByJSON_1 = require("../jsonModifiers/filterByJSON");
function filterByArray(array, targetArray, useExtendedTypes, advancedRules) {
    let r = [];
    let strictMatchFailed = false;
    if (advancedRules?.filterStrict === true &&
        array.length !== targetArray.length) {
        advancedRules?.strictMatchingFailedCallback?.();
        return advancedRules?.defaultReturnValue ?? undefined;
    }
    targetArray.forEach((targetItem, i) => {
        let item = array[i];
        if (!item)
            return (strictMatchFailed = true);
        if (useExtendedTypes &&
            [...extendedTypeof_1.extendedType_TypesArray, extendedTypeof_1.extendedType_Any].includes(targetItem)) {
            if (targetItem === extendedTypeof_1.extendedType_Any ||
                (0, extendedTypeof_1.extendedTypeofCustom)(item) === targetItem) {
                r.push(item);
            }
            else {
                strictMatchFailed = true;
            }
        }
        else {
            if ((0, extendedTypeof_1.extendedTypeof)(targetItem) !== (0, extendedTypeof_1.extendedTypeof)(item))
                return (strictMatchFailed = true);
            switch ((0, extendedTypeof_1.extendedTypeof)(targetItem)) {
                case "json": {
                    let filtered = (0, filterByJSON_1.filterByJson)(item, targetItem, useExtendedTypes, {
                        strictFiltering: advancedRules?.filterStrict,
                        strictMatchingFailedCallback: () => {
                            strictMatchFailed = true;
                        },
                    });
                    if (filtered !== undefined)
                        r.push(filtered);
                    break;
                }
                case "array": {
                    let filtered = filterByArray(item, targetItem, useExtendedTypes, {
                        filterStrict: advancedRules?.filterStrict,
                        strictMatchingFailedCallback: () => {
                            strictMatchFailed = true;
                        },
                    });
                    if (filtered !== undefined)
                        r.push(filtered);
                    break;
                }
                default: {
                    if (useExtendedTypes
                        ? targetItem === extendedTypeof_1.extendedType_Any ||
                            targetItem === (0, extendedTypeof_1.extendedTypeofCustom)(item) ||
                            targetItem === item
                        : // : extendedTypeof(targetItem) === extendedTypeof(item)
                            targetItem === item) {
                        r.push(item);
                    }
                    else {
                        strictMatchFailed = true;
                    }
                }
            }
        }
    });
    if (advancedRules?.filterStrict === true && strictMatchFailed) {
        advancedRules?.strictMatchingFailedCallback?.();
        return advancedRules?.defaultReturnValue ?? undefined;
    }
    return r;
}
exports.filterByArray = filterByArray;
