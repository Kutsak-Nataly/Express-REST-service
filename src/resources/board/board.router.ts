import express, {Request, Response} from 'express';
import {getReasonPhrase, StatusCodes} from 'http-status-codes'
import {boardService} from './board.service';
import {Board} from './board.model';
import {Column} from '../columns/column.model';

const router = express.Router();

router.route('/').get(async (_req: Request, res: Response) => {
  const board = await boardService.getAll();
  res.status(StatusCodes.OK).json(board);
});

router.route('/:boardId').get(async (req: Request, res: Response) => {
  if (req.params['boardId']) {
    const board = await boardService.getById(req.params['boardId']);
    if (board) {
      res.status(StatusCodes.OK).json(board);
    } else {
      res.status(StatusCodes.NOT_FOUND).json({message: getReasonPhrase(StatusCodes.NOT_FOUND)});
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
  res.status(StatusCodes.CREATED).json(board);
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
  res.status(StatusCodes.OK).json(board);
});

router.route('/:id').delete(async (req: Request, res: Response) => {
  if (req.params['id']) {
    await boardService.deleteById(req.params['id']);
    res.status(StatusCodes.OK).send('delete board by ID successfully completed');
  }
});

export {router};
