const DB = require('../../datebase/db');

const {boards} = DB;

const getAll = async () => boards;

const getById = async id => boards.find(board => board.id === id);

const postBoard = async board => boards.push(board);

const putBoard = async board => {
  const boardOld = boards.find(el => el.id === board.id);
  return boards.splice(boards.indexOf(boardOld), 1, board);
};

const deleteById = async (id) => {
  const boardDel = boards.find(board => board.id === id);
  boards.splice(boards.indexOf(boardDel), 1);
};

module.exports = { getAll, getById, postBoard, putBoard, deleteById };
