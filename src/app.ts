import express, {NextFunction, Request, Response} from 'express';
import swaggerUI from 'swagger-ui-express';
import path from 'path';
import YAML from 'yamljs';
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
app.use((error: Error, _req: Request, res: Response, next: NextFunction) => {
    res.status(404).send(error.name);
    next();
});

app.use('/users', userRouter);
app.use('/boards', boardRouter);
app.use('/boards/:boardId/tasks', taskRouter);

export {app};
