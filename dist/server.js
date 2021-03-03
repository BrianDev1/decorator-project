"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
require("./controllers");
const routes_decorators_1 = require("./decorators/routes.decorators");
app.use(cookieParser());
app.use(routes_decorators_1.appRouter);
app.listen(3005, () => {
    console.log('Server is running on port 3005');
});
//# sourceMappingURL=server.js.map