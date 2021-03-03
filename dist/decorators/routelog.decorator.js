"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
const express_1 = require("express");
exports.appRouter = express_1.Router();
function routeLog() {
    return function (target, propertyKey, descriptor) {
        const original = descriptor.value;
        console.log(original);
        descriptor.value = function (...args) {
            let request = args[0];
            const { url, method, body, headers } = request;
            console.log(original);
            console.log(request);
            console.log("[LOG]", {
                url,
                method,
                body,
                headers,
            });
            return original.apply(this, args);
        };
    };
}
exports.default = routeLog;
//# sourceMappingURL=routelog.decorator.js.map