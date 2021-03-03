import { Router, Request } from "express";
import { IMethod, IRoutes } from "../utils/functions";
export const appRouter = Router();

function routeLog(): MethodDecorator {
  return function (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const original = descriptor.value;

    console.log(original);

    descriptor.value = function (...args: any[]) {
      let request = args[0] as Request;

      const { url, method, body, headers } = request;
      console.log(original);
      console.log(request);

      console.log("[LOG]", {
        url,
        method,
        body,
        headers,
      });
      return original.apply(this, args);
    };
  };
}

export default routeLog;
