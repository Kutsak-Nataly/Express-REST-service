import express, {NextFunction, Request, Response} from 'express';
import {Task} from './task.model';
import {taskService} from './task.service';
import {MyError} from '../../common/myError';

const router = express.Router({ mergeParams: true });

router.route('/').get(async (req: Request, res: Response) => {
  if (req.params['boardId']) {
    const tasks = await taskService.getAll(req.params['boardId']);
    res.status(200).json(tasks);
  }
});

router.route('/:id').get(async (req: Request, res: Response, next:NextFunction) => {
  if (req.params['boardId'] && req.params['id']) {
    const task = await taskService.getById(req.params['boardId'], req.params['id']);
    if (task) {
      res.status(200).json(task);
    } else {
      const err = new MyError('User Not task', 'validation', 404 );
      next(err);
    }
  }
});

router.route('/').post(async (req: Request, res: Response) => {
  const task = new Task(
      req.body.title,
      req.body.order,
      req.body.description,
      req.body.userId,
      req.params['boardId'],
      req.body.columnId
  );
  await taskService.postTask(task);
  res.status(201).json(task);
});

router.route('/:id').put(async (req: Request, res: Response) => {
  const task = new Task(
      req.body.title,
      req.body.order,
      req.body.description,
      req.body.userId,
      req.params['boardId'],
      req.body.columnId,
      req.params['id'],
  );
  await taskService.putTask(task);
  res.status(200).json(task);
});

router.route('/:id').delete(async (req: Request, res: Response) => {
  if (req.params['boardId'] && req.params['id']) {
    const task = await taskService.deleteById(req.params['boardId'], req.params['id']);
    res.status(200).json(task);
  }
});
export {router};
