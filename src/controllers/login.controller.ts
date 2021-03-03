import { Request, Response } from "express";
import routeLog from "../decorators/routelog.decorator";
import routesDecorator from "../decorators/routes.decorators";
import { METHOD, BRIANROUTES } from "../utils/functions";
export class Login {
  @routeLog()
  @routesDecorator({
    path: BRIANROUTES.Login,
    method: METHOD.GET,
  })
  getLoginUser(req: Request, res: Response) {
    if (req.cookies.NodeServerSiteCookie === undefined) {
      res.cookie(
        `NodeServerSiteCookie`,
        `${req.params.name + req.params.passphrase}`,
        { maxAge: 100000, httpOnly: true }
      );
      res.write(`Your Cookie was created successfully ${req.params.name}`);
      res.write(`\nHead to /private and view the secret ${req.params.name}`);
      res.end();
    } else if (req.cookies.NodeServerSiteCookie) {
      res.write(`Welcome back ${req.params.name}`);
      res.write("\nhead over to --> /private");
      res.end();
    }
  }
}
