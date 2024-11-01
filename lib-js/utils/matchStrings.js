"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchStrings = void 0;
function matchStrings(searchString, matchString, options) {
    let match = 0;
    let weight_ = options?.weight ?? 1;
    let searchString_ = options?.ignoreCase
        ? searchString.toLowerCase()
        : searchString;
    if (options?.ignoreSpaces)
        searchString_ = searchString_.replace(/\s/g, "");
    let matchString_ = options?.ignoreCase
        ? matchString.toLowerCase()
        : matchString;
    if (options?.ignoreSpaces)
        matchString_ = matchString_.replace(/\s/g, "");
    if (searchString_ === matchString_)
        match = 100 * weight_;
    else if (matchString_.includes(searchString_)) {
        if (!searchString_.includes(" ") && !options?.ignoreWord) {
            match =
                (1 / matchString_.split(" ").length) *
                    weight_ *
                    (searchString_.length / matchString_.length) *
                    100;
        }
        else {
            match = (searchString_.length / matchString_.length) * 100 * weight_;
        }
    }
    return Math.round(match);
}
exports.matchStrings = matchStrings;
