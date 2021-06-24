import express, {NextFunction, Request, Response} from 'express';
import {Task} from './task.model';
import {taskService} from './task.service';
import {MyError} from '../../error_handler/myError';

const router = express.Router({mergeParams: true});

router.route('/').get(async (req: Request, res: Response, next: NextFunction) => {
  if (req.params['boardId']) {
    try {
      const tasks = await taskService.getAll(req.params['boardId']);
      if (!tasks) {
        throw new MyError('Tasks Not found', 'error', 404);
      } else {
        res.status(200).json(tasks);
        return;
      }
    } catch (err) {
      next(err);
    }
  } else {
    const err = new MyError('Bad Request for get all tasks by board id', 'validation', 400);
    next(err);
  }
});

router.route('/:id').get(async (req: Request, res: Response, next: NextFunction) => {
  const {id, boardId} = req.params;
  if (boardId && id) {
    try {
      const task = await taskService.getById(boardId, id);
      if (!task) {
        throw new MyError('Task Not found', 'error', 404);
      } else {
        res.status(200).json(task);
        return;
      }
    } catch (err) {
      next(err);
    }
  } else {
    const err = new MyError('Bad Request for get task by id', 'validation', 400);
    next(err);
  }
});

router.route('/').post(async (req: Request, res: Response, next: NextFunction) => {
  const {boardId} = req.params;
  if (boardId) {
    try {
      const task: Task = req.body;
      task.boardId = boardId;
      const taskNew = await taskService.postTask(task);
      if (!taskNew) {
        throw new MyError('Task Not found', 'error', 404);
      } else {
        res.status(201).json(task);
        return;
      }
    } catch (err) {
      next(err);
    }
  } else {
    const err = new MyError('Bad Request for post task', 'validation', 400);
    next(err);
  }
});

router.route('/:id').put(async (req: Request, res: Response, next: NextFunction) => {
  const {id, boardId} = req.params;
  if (boardId && id) {
    const task: Task = req.body;
    task.id = id;
    task.boardId = boardId;
    try {
      const taskApd = await taskService.putTask(task);
      if (!taskApd) {
        throw new MyError('Task Not put', 'error', 404);
      } else {
        res.status(200).json(task);
        return;
      }
    } catch (err) {
      next(err);
    }
  } else {
    const err = new MyError('Bad Request for update task', 'validation', 400);
    next(err);
  }

});

router.route('/:id').delete(async (req: Request, res: Response, next: NextFunction) => {
  const {id, boardId} = req.params;
  if (boardId && id) {
    try {
      await taskService.deleteById(boardId, id);
      res.status(200).json('delete task by ID successfully completed');
    } catch (err) {
      next(err);
    }
  } else {
    const err = new MyError('Bad Request for delete task', 'validation', 400);
    next(err);
  }
});
export {router};
