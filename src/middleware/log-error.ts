import {NextFunction, Request, Response} from 'express';
import * as fs from "fs";
import path from "path";
import {finished} from "stream";

const errorLog = (error: Error, req: Request, res: Response, next: NextFunction): void => {
    const start = Date.now();
    const writeStream = fs.createWriteStream(path.join(__dirname, '../../log/error.log'), {
        flags: 'a',
        encoding: 'utf8'
    });
    const {method, url} = req;
    next();
    finished(res, (): void => {
        const {statusCode} = res;
        const ms: number = Date.now() - start;
        const data = `${start} \t${method} : ${url} \t: ${JSON.stringify(error)}\t/ ${statusCode} - \t[${ms}ms]\n`;
        writeStream.write(data);
    });
};
export {errorLog};
