import express, {NextFunction, Request, Response} from 'express';
import swaggerUI from 'swagger-ui-express';
import path from 'path';
import * as fs from 'fs';
import YAML from 'yamljs';
import {finished} from 'stream';

import {router as userRouter} from './resources/users/user.router';
import {router as boardRouter} from './resources/board/board.router';
import {router as taskRouter} from './resources/task/task.router';


const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use('/', (req: Request, res: Response, next: NextFunction) => {
    if (req.originalUrl === '/') {
        res.send('Service is running!');
        return;
    }
    next();
});

app.use((req: Request, res: Response, next: NextFunction) => {
    const start = Date.now();
    const {method, url, params, query} = req;
    const writeStream = fs.createWriteStream(path.join(__dirname, '../logging/info.log'),{flags: 'a', encoding: 'utf8'});
    next();
    finished(res, (): void => {
        const {statusCode} = res;
        const ms: number = Date.now() - start;
        writeStream.write(`${start.toString()} \t${method} \t/ ${url}/${params}?${query} - \t${statusCode} - \t[${ms}ms]`);
    });
});

app.use('/users', userRouter);
app.use('/boards', boardRouter);
app.use('/boards/:boardId/tasks', taskRouter);

app.use((error: Error, _req: Request, res: Response, next: NextFunction) => {
    res.status(404).json(error.name);
    next();
});

process.on('uncaughtException', (err) => {
    console.log(`err message: ${err}`);
});

process.on('unhandledRejection', (reason, promise) => {
    promise.catch((error) => {
        console.log(`error message: ${{ reason, error }}`);
    });
});

export {app};
