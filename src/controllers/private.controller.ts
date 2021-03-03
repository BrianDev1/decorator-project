import { Request, Response } from 'express';
import routesDecorator from '../decorators/routes.decorators';
import { METHOD, BRIANROUTES } from '../utils/functions';

export class Private {
    @routesDecorator({
        path: BRIANROUTES.Private,
        method: METHOD.POST
    })
    postPrivate(req: Request, res: Response) {
        if (!req.cookies.NodeServerSiteCookie) { res.send("You may not enter!!!"); } else {
            res.status(200).json({ secret: "Welcome to the secret... secret... place..." });
        }
    }
}