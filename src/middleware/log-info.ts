import {NextFunction, Request, Response} from 'express';
import * as fs from "fs";
import path from "path";
import {finished} from "stream";

const infoLog = (req: Request, res: Response, next: NextFunction): void => {
    const start = Date.now();
    const {method, url, params, query, body} = req;
    const writeStream = fs.createWriteStream(path.join(__dirname, '../../log/info.log'), {flags: 'a', encoding: 'utf8'});
    next();
    finished(res, (): void => {
        const {statusCode} = res;
        const ms: number = Date.now() - start;
        const data = `${method} \t: ${JSON.stringify(body)}\t/ ${url}/:${JSON.stringify(params)}?${JSON.stringify(query)} - \t${statusCode} - \t[${ms}ms]\n`;
        writeStream.write(data);
    });
};

export {infoLog};
