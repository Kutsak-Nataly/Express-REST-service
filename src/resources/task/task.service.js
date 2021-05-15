const taskRepo = require('./task.memory.repository');

const getAll = boardId => taskRepo.getAll(boardId);
const getById = (boardId, id) => taskRepo.getById(boardId, id);
const postTask = task => taskRepo.postTask(task);
const putTask = task => taskRepo.putTask(task);
const deleteById = (boardId, id) => taskRepo.deleteById(boardId, id);
const removeByBoard = boardId => taskRepo.removeByBoard(boardId);
const updateTasks = userId => taskRepo.updateTasks(userId);

module.exports = { getAll, getById, postTask, putTask, deleteById, removeByBoard, updateTasks };
