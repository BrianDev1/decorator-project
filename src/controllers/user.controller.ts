import { Request, Response } from 'express';
import routesDecorator from '../decorators/routes.decorators';
import { METHOD, BRIANROUTES } from '../utils/functions';
export class Users {
    @routesDecorator({
        path: BRIANROUTES.Users,
        method: METHOD.GET
    })
    getUsers(req: Request, res: Response) {
        res.send('User area using a typescript decorator, WELCOME!!');
    }
}