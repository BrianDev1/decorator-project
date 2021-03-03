"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
const routelog_decorator_1 = require("../decorators/routelog.decorator");
const routes_decorators_1 = require("../decorators/routes.decorators");
class Login {
    getLoginUser(req, res) {
        if (req.cookies.NodeServerSiteCookie === undefined) {
            res.cookie(`NodeServerSiteCookie`, `${req.params.name + req.params.passphrase}`, { maxAge: 100000, httpOnly: true });
            res.write(`Your Cookie was created successfully ${req.params.name}`);
            res.write(`\nHead to /private and view the secret ${req.params.name}`);
            res.end();
        }
        else if (req.cookies.NodeServerSiteCookie) {
            res.write(`Welcome back ${req.params.name}`);
            res.write("\nhead over to --> /private");
            res.end();
        }
    }
}
__decorate([
    routelog_decorator_1.default(),
    routes_decorators_1.default({
        path: "/login/:name/:passphrase",
        method: "get",
    })
], Login.prototype, "getLoginUser", null);
exports.Login = Login;
//# sourceMappingURL=login.controller.js.map