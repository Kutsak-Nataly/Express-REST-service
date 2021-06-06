import express, {NextFunction, Request, Response} from 'express';
import {boardService} from './board.service';
import {Board} from './board.model';
import {Column} from '../columns/column.model';
import {MyError} from '../../error_handler/myError';

const router = express.Router();

router.route('/').get(async (_req: Request, res: Response, next: NextFunction) => {
  const board = await boardService.getAll();
  if (board) {
    res.status(200).json(board);
  } else {
    const err = new MyError('Boards Not found', 'error', 404);
    next(err);
  }

});

router.route('/:boardId').get(async (req: Request, res: Response, next: NextFunction) => {
  if (req.params['boardId']) {
    const board = await boardService.getById(req.params['boardId']);
    if (board) {
      res.status(200).json(board);
    } else {
      const err = new MyError('Board Not found', 'error', 404);
      next(err);
    }
  }

});

router.route('/').post(async (req: Request, res: Response) => {
  const columns = [];
  for (let i = 0; i < req.body.columns.length; i += 1) {
    const column = new Column(
        req.body.columns[i].title,
        req.body.columns[i].order
    );
    columns.push(column);
  }
  const board = new Board(
      req.body.title,
      columns
  );
  await boardService.postBoard(board);
  res.status(201).json(board);
});

router.route('/:id').put(async (req: Request, res: Response) => {
  const columns: Column[] = [];
  for (let i = 0; i < req.body.columns.length; i += 1) {
    const column = new Column(
        req.body.columns[i].title,
        req.body.columns[i].order,
        req.body.columns[i].id
    );
    columns.push(column);
  }
  const board = new Board(
      req.body.title,
      columns,
      req.params['id']
  );
  await boardService.putBoard(board);
  res.status(200).json(board);
});

router.route('/:id').delete(async (req: Request, res: Response, next: NextFunction) => {
  if (req.params['id']) {
    await boardService.deleteById(req.params['id']);
    res.status(200).send('delete board by ID successfully completed');
  } else {
    const err = new MyError('Bad Request for delete board by id', 'validation', 400);
    next(err);
  }
});

export {router};
