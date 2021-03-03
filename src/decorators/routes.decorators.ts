import { Router, Request } from 'express';
import { IMethod, IRoutes } from '../utils/functions';
export const appRouter = Router();
interface IOptions {
    path: IRoutes;
    method: IMethod;
    middlewares?: any[],
}
function routesDecorator(options: IOptions) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        (appRouter as any)[options.method](options.path, target[propertyKey]);
    };
}

function routeLog(): MethodDecorator {
    return function (
        target: Object,
        propertyKey: string | symbol,
        descriptor: PropertyDescriptor
    ) {
        const original = descriptor.value;

        descriptor.value = function (...args: any[]) {
            let request = args[0] as Request;

            const {
                url,
                method,
                body,
                headers,
            } = request;

            console.log("[LOG]", {
                url,
                method,
                body,
                headers,
            });
            return original.apply(this, args);
        }
    };
} 
export default routesDecorator;