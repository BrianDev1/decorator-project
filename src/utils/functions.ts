export const enum METHOD {
    GET = "get",
    POST = "post",
    PUT = "put",
    DELETE = "delete",
}

export const enum BRIANROUTES {
    Home = "/home",
    Users = "/users",
    Private = "/private",
    Repeat = "/repeat",
    LoginHome = "/login",
    Login = "/login/:name/:passphrase",
}

export type IRoutes = BRIANROUTES.Home | BRIANROUTES.Private | BRIANROUTES.Users |
                      BRIANROUTES.Repeat | BRIANROUTES.Login | BRIANROUTES.LoginHome;
export type IMethod = METHOD.GET | METHOD.POST | METHOD.PUT | METHOD.DELETE;

