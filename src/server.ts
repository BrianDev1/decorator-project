import * as express from 'express';
import cookieParser = require("cookie-parser");
const app = express();
import './controllers';
import { appRouter } from './decorators/routes.decorators';
app.use(cookieParser());
app.use(appRouter);
app.listen(3005, () => {
    console.log('Server is running on port 3005');
});