import { Request, Response, NextFunction } from "express";
import { exception } from "../constant/api-result";

export function AuthMiddleware(): MethodDecorator {
    return function (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function (req: Request, res: Response, next: NextFunction) {
            const {
                headers
            } = req;
            const { authorization } = headers;
            if (authorization) {
                return originalMethod.apply(this, [req, res, next]);
            } else {
                return exception("Unauthorized")
            }
        };
    };
}
