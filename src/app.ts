import express, {NextFunction, Request, Response} from 'express';
import swaggerUI from 'swagger-ui-express';
import path from 'path';
import YAML from 'yamljs';
import * as fs from 'fs';
import {infoLog} from './error_handler/log-info';
import {errorLog} from './error_handler/log-error';
import {clientErrorHandler} from './error_handler/client-error-handler';
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
app.use(infoLog);

app.use('/users', userRouter);
app.use('/boards', boardRouter);
app.use('/boards/:boardId/tasks', taskRouter);
app.use('/404', (_req, res) => {
    res.send('<h1>Page not found - 404</h1>')
});
app.use('*', (_req, res) => {
    res.redirect('404');
});

app.use(errorLog);
app.use(clientErrorHandler);

process.on('uncaughtException', (err) => {
    const pathProcessError = path.join(__dirname, '..', 'log', 'error-process.log');
    const data = `Caught exception: ${err.message}\n ${err.stack}`;
    fs.writeFileSync(pathProcessError, data, {
        flag: 'a',
        encoding: 'utf8'
    });
    // eslint-disable-next-line no-process-exit
    process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
    promise.catch((error) => {
        const pathProcessError = path.join(__dirname, '..', 'log', 'error-process.log');
        const data = `${error.stack}\n${reason}\n`;
        fs.writeFileSync(pathProcessError, data, {
            flag: 'a',
            encoding: 'utf8'
        });
    });
});

// throw Error('Oops!!!!');
// Promise.reject(Error('Oops!'));

export {app};
