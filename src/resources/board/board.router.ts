import express from 'express';
import {boardService} from './board.service';
import {Board} from './board.model';
import {Column} from '../columns/column.model';

const router = express.Router();

router.route('/').get(async (_req, res) => {
  const board = await boardService.getAll();
  res.status(200).json(board);
});

router.route('/:boardId').get(async (req, res) => {
  if (req.params['boardId']) {
    const board = await boardService.getById(req.params['boardId']);
    if (board) {
      res.status(200).json(board);
    } else {
      res.status(404).json({message: 'not found board'});
    }
  }

});

router.route('/').post(async (req, res) => {
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

router.route('/:id').put(async (req, res) => {
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

router.route('/:id').delete(async (req, res) => {
  if (req.params['id']) {
    await boardService.deleteById(req.params['id']);
    res.status(200).send('delete board by ID successfully completed');
  }
});

export {router};
