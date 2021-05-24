const router = require('express').Router();
const boardService = require('./board.service');
const Board = require('./board.model');
const Column = require('../columns/column.model');

router.route('/').get(async (req, res) => {
  const board = await boardService.getAll();
  res.status(200).json(board);
});
router.route('/:boardId').get(async (req, res) => {
  const board = await boardService.getById(req.params.boardId);
  if (board) {
    res.status(200).json(board);
  } else {
    res.status(404).json({ message: 'not found board' });
  }
});

router.route('/').post(async (req, res) => {
  const columns = [];
  for (let i = 0; i < req.body.columns.length; i += 1) {
    const column = new Column({
      title: req.body.columns[i].title,
      order: req.body.columns[i].order
    });
    columns.push(column);
  }
  const board = new Board({
    title: req.body.title,
    columns
  });
  await boardService.postBoard(board);
  res.status(201).json(board);
});

router.route('/:id').put(async (req, res) => {
  const columns = [];
  for (let i = 0; i < req.body.columns.length; i += 1) {
    const column = new Column({
      id: req.body.columns[i].id,
      title: req.body.columns[i].title,
      order: req.body.columns[i].order
    });
    columns.push(column);
  }
  const board = {
    id: req.params.id,
    title: req.body.title,
    columns
  };
  await boardService.putBoard(board);
  res.status(200).json(board);
});

router.route('/:id').delete(async (req, res) => {
  await boardService.deleteById(req.params.id);
  res.status(200).send('delete board by ID successfully completed');
});

module.exports = router;
