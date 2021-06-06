import {NextFunction, Request, Response} from 'express';
import * as fs from "fs";
import path from "path";
import {finished} from "stream";

const infoLog = (req: Request, res: Response, next: NextFunction): void => {
    const start = Date.now();
    const {method, url, query, body} = req;
    const pathToLogger = path.join(__dirname, '..', '..', 'log','info.log');
    const writeStream = fs.createWriteStream(pathToLogger, {flags: 'a', encoding: 'utf8'});
    next();
    finished(res, (): void => {
        const {statusCode} = res;
        const ms: number = Date.now() - start;
        const data = `${start}\t${method} \t body: ${JSON.stringify(body)}\t${url}\t query: ${JSON.stringify(query)} \t${statusCode} \t[${ms}ms]\n`;
        writeStream.write(data);
    });
};

export {infoLog};
