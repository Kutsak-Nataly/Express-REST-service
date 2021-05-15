const boardRepo = require('./board.memory.repository');

const getAll = () => boardRepo.getAll();
const getById = id => boardRepo.getById(id);
const postBoard = board => boardRepo.postBoard(board);
const putBoard = board => boardRepo.putBoard(board);
const deleteById = id => boardRepo.deleteById(id);

module.exports = { getAll, getById, postBoard, putBoard, deleteById };
