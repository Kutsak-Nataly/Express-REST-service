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
  const {boardId} = req.params;
  if (boardId) {
    try {
      const board = await boardService.getById(boardId);
      if(!board) {
        throw new MyError('Board Not found', 'error', 404);
      }
      else {
        res.status(200).json(board);
        return;
      }
    } catch(err) {
      next(err);
    }
  } else {
    const err = new MyError('Bad Request for get board', 'validation', 404);
    next(err);
  }
});

router.route('/').post(async (req: Request, res: Response, next: NextFunction) => {
  try {
    const board: Board = req.body;
    const newBoard = await boardService.postBoard(board);
    res.status(201).json(newBoard);
  } catch {
    const err = new MyError('Board not create', 'error', 400);
    next(err);
  }
});

router.route('/:id').put(async (req: Request, res: Response, next: NextFunction) => {
  try {
    const board: Board = req.body;
    board.id = req.params['id'];
    await boardService.putBoard(board);
    res.status(200).json(board);
  } catch {
    const err = new MyError('Board not update', 'error', 400);
    next(err);
  }
});

router.route('/:id').delete(async (req: Request, res: Response, next: NextFunction) => {
  if (req.params['id']) {
    try {
      await boardService.deleteById(req.params['id']);
      res.status(200).send('delete board by ID successfully completed');
    } catch (err) {
      next(err);
    }
  } else {
    const err = new MyError('Bad Request for delete board by id', 'validation', 404);
    next(err);
  }
});

export {router};
