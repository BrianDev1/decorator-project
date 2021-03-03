import routesDecorator from '../decorators/routes.decorators';
import { METHOD, BRIANROUTES } from '../utils/functions';
import { Request, Response } from 'express';
export class Home {
    @routesDecorator({
        path: BRIANROUTES.Home,
        method: METHOD.GET
    })
    getHome(req: Request, res: Response) {
        res.send('Welcome to my express/node and typescript server using typescript decorators project');
    }
}