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
  res.status(200).json(board);
});

router.route('/').post(async (req, res) => {
  const board = new Board({
    title: req.body.title,
    columns: [ new Column({
      title: req.body.columns[0].title,
      order: req.body.columns[0].order
    })]
  });
  await boardService.postBoard(board);
  res.status(201).json(board);
});

router.route('/:id').put(async (req, res) => {
  const board = {
    id: req.params.id,
    title: req.body.title,
    columns: [
      {
        title: req.body.columns[0].title,
        order: req.body.columns[0].order
      }
    ]
  };
  await boardService.putBoard(board);
  res.status(201).json(board);
});

router.route('/:id').delete(async (req, res) => {
  await boardService.deleteById(req.params.id);
  res.status(200).send('delete board by ID successfully completed');
});

module.exports = router;
