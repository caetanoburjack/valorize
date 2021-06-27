import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export function ensureAuthentication(request: Request, response: Response, next: NextFunction) {
    const tokenReturned = request.headers.authorization;
    const token = tokenReturned.split(" ")[1];
    //OUTRA ABORDAGEM PARA PEGAR O TOKEN
    //const [,token] = tokenReturned.split(" ");
    //console.log(token);

    try {
        const { sub } = verify(token, "fini") as IPayload;
        request.user_id = sub;

    } catch (err) {
        return response.status(401).end();
    }

    return next();
}