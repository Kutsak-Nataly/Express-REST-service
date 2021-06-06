import {NextFunction, Request, Response} from 'express';
import {MyError} from './myError';

const clientErrorHandler = (error: Error | MyError, _req: Request, res: Response, next: NextFunction): void => {
    if(error instanceof MyError){
        res.status( error.status).send(error.message);
    } else {
        res.status( 500).send(`${error}`);
    }
    next();
};
export {clientErrorHandler};
