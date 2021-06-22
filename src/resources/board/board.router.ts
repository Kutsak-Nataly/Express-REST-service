import express, {NextFunction, Request, Response} from 'express';
import {boardService} from './board.service';
import {Board} from './board.model';
import {MyError} from '../../error_handler/myError';

const router = express.Router();

router.route('/').get(async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const board = await boardService.getAll();
    res.status(200).json(board);
  } catch {
    const err = new MyError('Boards Not found', 'error', 404);
    next(err);
  }
});

router.route('/:boardId').get(async (req: Request, res: Response, next: NextFunction) => {
  if (req.params['boardId']) {
    try {
      const board = await boardService.getById(req.params['boardId']);
      res.status(200).json(board);
    } catch {
      const err = new MyError('Board Not found', 'error', 404);
      next(err);
    }
  } else {
    const err = new MyError('Bad Request for get board', 'validation', 404);
    next(err);
  }
});

router.route('/').post(async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newBoard = await boardService.postBoard(req.body);
    res.status(201).json(newBoard);
  } catch {
    const err = new MyError('Board don\'t create', 'error', 400);
    next(err);
  }
});

router.route('/:id').put(async (req: Request, res: Response, next: NextFunction) => {
  try {
    const board = new Board(
        req.body.title,
        req.body.columns,
        req.params['id']
    );
    await boardService.putBoard(board);
    res.status(200).json(board);
  } catch {
    const err = new MyError('Board don\'t update', 'error', 400);
    next(err);
  }
});

router.route('/:id').delete(async (req: Request, res: Response, next: NextFunction) => {
  if (req.params['id']) {
    try {
      await boardService.deleteById(req.params['id']);
      res.status(200).send('delete board by ID successfully completed');
    } catch {
      const err = new MyError('Board don\'t delete', 'error', 400);
      next(err);
    }
  } else {
    const err = new MyError('Bad Request for delete board by id', 'validation', 400);
    next(err);
  }
});

export {router};
