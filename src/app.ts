import express, {NextFunction, Request, Response} from 'express';
import swaggerUI from 'swagger-ui-express';
import path from 'path';
import YAML from 'yamljs';
import {infoLog} from './middleware/log-info';
import {errorLog} from './middleware/log-error';
import {clientErrorHandler} from './middleware/client-error-handler';
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

app.use(errorLog);
app.use(clientErrorHandler);

process.on('uncaughtException', (err) => {
    console.log(`err message: ${err}`);
});

process.on('unhandledRejection', (reason, promise) => {
    promise.catch((error) => {
        console.log(`error message: ${{ reason, error }}`);
    });
});

// throw Error('Oops!');
// Promise.reject(Error('Oops!'));

export {app};
