"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Private = void 0;
const routes_decorators_1 = require("../decorators/routes.decorators");
const cookieParser = require("cookie-parser");
class Private {
    postPrivate(req, res) {
        if (!req.cookies.NodeServerSiteCookie) {
            res.send("You may not enter!!!");
        }
        else {
            res.status(200).json({ secret: "Welcome to the secret... secret... place..." });
        }
    }
}
__decorate([
    routes_decorators_1.default({
        path: "/private",
        method: "post"
    })
], Private.prototype, "postPrivate", null);
exports.Private = Private;
//# sourceMappingURL=private.controller.js.map