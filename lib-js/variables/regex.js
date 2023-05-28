"use strict";
exports.__esModule = true;
exports.regex = void 0;
var regex = /** @class */ (function () {
    function regex() {
    }
    var _a, _b;
    regex.numregex = function () { return new RegExp("^([\\d]{1,})$", "g"); };
    regex.tokenreg = function () { return new RegExp("^\\b[\\w]{30}\\b$", "g"); };
    regex.jsonreg = function () { return new RegExp("^\\{+[\\W\\w]*\\}$", "g"); };
    regex.urlreg = function () { return new RegExp("(https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|www\\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\\.[^\\s]{2,}|https?:\\/\\/(?:www\\.|(?!www))[a-zA-Z0-9]+\\.[^\\s]{2,}|www\\.[a-zA-Z0-9]+\\.[^\\s]{2,})", "g"); };
    regex.twitch = (_a = /** @class */ (function () {
            function class_1() {
            }
            return class_1;
        }()),
        _a.message = (_b = /** @class */ (function () {
                function class_2() {
                }
                return class_2;
            }()),
            _b.action = function () { return /^\u0001ACTION (.*)\u0001$/; },
            _b),
        _a.usernamereg = function () { return new RegExp("\\b^[\\w]{1,32}$\\b", "g"); },
        _a);
    return regex;
}());
exports.regex = regex;
;
