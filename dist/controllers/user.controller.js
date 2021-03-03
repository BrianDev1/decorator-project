"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const routelog_decorator_1 = require("../decorators/routelog.decorator");
const routes_decorators_1 = require("../decorators/routes.decorators");
class Users {
    getUsers(req, res) {
        res.send("User area using a typescript decorator, WELCOME!!");
    }
}
__decorate([
    routelog_decorator_1.default(),
    routes_decorators_1.default({
        path: "/users",
        method: "get",
    })
], Users.prototype, "getUsers", null);
exports.Users = Users;
//# sourceMappingURL=user.controller.js.map