const boardRepo = require('./board.memory.repository');
const { removeByBoard } = require('../task/task.service');

const getAll = () => boardRepo.getAll();
const getById = id => boardRepo.getById(id);
const postBoard = board => boardRepo.postBoard(board);
const putBoard = board => boardRepo.putBoard(board);
const deleteById = async id => {
  await boardRepo.deleteById(id);
  await removeByBoard(id);
};

module.exports = { getAll, getById, postBoard, putBoard, deleteById };
