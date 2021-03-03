"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
const express_1 = require("express");
exports.appRouter = express_1.Router();
function routesDecorator(options) {
    return (target, propertyKey, descriptor) => {
        exports.appRouter[options.method](options.path, target[propertyKey]);
    };
}
function routeLog() {
    return function (target, propertyKey, descriptor) {
        const original = descriptor.value;
        descriptor.value = function (...args) {
            let request = args[0];
            const { url, method, body, headers, } = request;
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
exports.default = routesDecorator;
//# sourceMappingURL=routes.decorators.js.map