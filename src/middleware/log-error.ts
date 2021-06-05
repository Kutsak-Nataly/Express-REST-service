import {NextFunction, Request, Response} from 'express';
import * as fs from "fs";
import path from "path";
import {MyError} from '../common/myError';

const errorLog = (error: Error | MyError, req: Request, _res: Response, next: NextFunction): void => {
    const pathToLoggerError = path.join(__dirname, '..', '..', 'log','error.log');
    const start = Date.now();
    const writeStream1 = fs.createWriteStream(pathToLoggerError, {
        flags: 'a',
        encoding: 'utf8'
    });
    const {method, url} = req;
    let data = '';
    if(error instanceof MyError) {
        data = `${start} \tType: ${error.type} \t${method} \t${error.status} \t${url} \t${error.message}\n`;
    } else {
        data = `${start} \tType: other \t${method} \t500 \t${url} \t${error.message}\n`;
    }
    writeStream1.write(data);
    next(error);
};
export {errorLog};
