const router = require('express').Router({ mergeParams: true });
const Task = require('./task.model');
const taskService = require('./task.service');

router.route('/').get(async (req, res) => {
  const tasks = await taskService.getAll(req.params.boardId);
  res.status(200).json(tasks);
});

router.route('/:id').get(async (req, res) => {
  const task = await taskService.getById(req.params.boardId, req.params.id);
  res.status(200).json(task);
});

router.route('/').post(async (req, res) => {

  const task = new Task({
    title: req.body.title,
    order: req.body.order,
    description: req.body.description,
    userId: req.body.userId,
    boardId: req.params.boardId,
    columnId: req.body.columnId
  });
  await taskService.postTask(task);
  res.status(200).json(task);
});

router.route('/:id').put(async (req, res) => {
  const task = {
    id: req.params.id,
    title: req.body.title,
    order: req.body.order,
    description: req.body.description,
    userId: req.body.userId,
    boardId: req.params.boardId,
    columnId: req.body.columnId
  };
  await taskService.putTask(task);
  res.status(200).json(task);
});

router.route('/:id').delete(async (req, res) => {
  const task = await taskService.deleteById(req.params.boardId, req.params.id);
  res.status(200).json(task);
});
module.exports = router;
