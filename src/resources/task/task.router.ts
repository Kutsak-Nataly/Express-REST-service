import express, {NextFunction, Request, Response} from 'express';
import {Task} from './task.model';
import {taskService} from './task.service';
import {MyError} from '../../error_handler/myError';

const router = express.Router({mergeParams: true});

router.route('/').get(async (req: Request, res: Response, next: NextFunction) => {
  if (req.params['boardId']) {
    const tasks = await taskService.getAll(req.params['boardId']);
    if (tasks) {
      res.status(200).json(tasks);
    } else {
      const err = new MyError('Tasks Not found', 'error', 404);
      next(err);
    }

  } else {
    const err = new MyError('Bad Request for get all tasks by board id', 'validation', 400);
    next(err);
  }
});

router.route('/:id').get(async (req: Request, res: Response, next: NextFunction) => {
  if (req.params['boardId'] && req.params['id']) {
    const task = await taskService.getById(req.params['boardId'], req.params['id']);
    if (task) {
      res.status(200).json(task);
    } else {
      const err = new MyError('Task Not found', 'error', 404);
      next(err);
    }
  } else {
    const err = new MyError('Bad Request for get task by id', 'validation', 400);
    next(err);
  }
});

router.route('/').post(async (req: Request, res: Response, next: NextFunction) => {
  const task = new Task(
      req.body.title,
      req.body.order,
      req.body.description,
      req.body.userId,
      req.params['boardId'],
      req.body.columnId
  );
  if (task) {
    await taskService.postTask(task);
    res.status(201).json(task);
  } else {
    const err = new MyError('Bad Request for post task', 'validation', 400);
    next(err);
  }
});

router.route('/:id').put(async (req: Request, res: Response, next: NextFunction) => {
  const task = new Task(
      req.body.title,
      req.body.order,
      req.body.description,
      req.body.userId,
      req.params['boardId'],
      req.body.columnId,
      req.params['id'],
  );
  if (task) {
    await taskService.putTask(task);
    res.status(200).json(task);
  } else {
    const err = new MyError('Bad Request for put task', 'validation', 400);
    next(err);
  }
});

router.route('/:id').delete(async (req: Request, res: Response, next: NextFunction) => {
  if (req.params['boardId'] && req.params['id']) {
    const task = await taskService.deleteById(req.params['boardId'], req.params['id']);
    res.status(200).json(task);
  } else {
    const err = new MyError('Bad Request for delete task', 'validation', 400);
    next(err);
  }
});
export {router};
