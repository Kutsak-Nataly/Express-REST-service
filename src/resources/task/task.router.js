const router = require('express').Router();
// const Task = require('./task.model');
const taskService = require('./task.service');

router.route('/').get(async (req, res) => {
  const tasks = await taskService.getAll();
  res.send(tasks);
});

module.exports = router;
