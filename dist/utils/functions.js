"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BRIANROUTES = exports.METHOD = void 0;
var METHOD;
(function (METHOD) {
    METHOD["GET"] = "get";
    METHOD["POST"] = "post";
    METHOD["PUT"] = "put";
    METHOD["DELETE"] = "delete";
})(METHOD = exports.METHOD || (exports.METHOD = {}));
var BRIANROUTES;
(function (BRIANROUTES) {
    BRIANROUTES["Home"] = "/home";
    BRIANROUTES["Users"] = "/users";
    BRIANROUTES["Private"] = "/private";
    BRIANROUTES["Repeat"] = "/repeat";
    BRIANROUTES["LoginHome"] = "/login";
    BRIANROUTES["Login"] = "/login/:name/:passphrase";
})(BRIANROUTES = exports.BRIANROUTES || (exports.BRIANROUTES = {}));
//# sourceMappingURL=functions.js.map