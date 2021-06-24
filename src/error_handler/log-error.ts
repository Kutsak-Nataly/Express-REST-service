import {NextFunction, Request, Response} from 'express';
import * as fs from "fs";
import path from "path";
import {MyError} from './myError';

const errorLog = (error: Error | MyError, req: Request, _res: Response, next: NextFunction): void => {
    const pathToLoggerError = path.join(__dirname, '..', '..', 'log','error.log');
    const start = Date.now();
    const writeStream = fs.createWriteStream(pathToLoggerError, {
        flags: 'a',
        encoding: 'utf8'
    });
    const {method, url} = req;
    let typeError = 'other';
    let statusError = 500;
    let errorMessage = 'Internal Server Error';
    if(error instanceof MyError) {
        typeError = error.type;
        statusError = error.status;
        errorMessage = error.message;
    }
    const data = `${start} \tType: ${typeError} \t${method} \t${statusError} \t${url} \t${errorMessage}\n`;
    writeStream.write(data);
    next(error);
};
export {errorLog};
