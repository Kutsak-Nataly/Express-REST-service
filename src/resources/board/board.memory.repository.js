/**
 * @fileOverview The module from which queries are made to the database table Board
 * @module board.memory.repository
 * @requires DB
 * @type {{columns, boards, users, tasks}}
 */
const DB = require('../../datebase/db');

const {boards} = DB;
/**
 * Get all boards
 * @returns {Promise<Board[]>}
 */
const getAll = async () => boards;
/**
 * Get board by id
 * @param id {string} - Unique identification parameter of Board
 * @returns {Promise<void>}
 */
const getById = async id => boards.find(board => board.id === id);
/**
 * Create new board
 * @param board {Board} - Instance class Board
 * @returns {Promise<number>}
 */
const postBoard = async board => boards.push(board);
/**
 * Edit data about Board
 * @param board {Board} - Instance class Board
 * @returns {Promise<Board[]>}
 */
const putBoard = async board => {
  const boardOld = boards.find(el => el.id === board.id);
  return boards.splice(boards.indexOf(boardOld), 1, board);
};
/**
 * Delete board by id
 * @param id {string} - Unique identification parameter of board
 * @returns {Promise<void>}
 */
const deleteById = async id => {
  const boardDel = boards.find(board => board.id === id);
  boards.splice(boards.indexOf(boardDel), 1);
};


module.exports = { getAll, getById, postBoard, putBoard, deleteById };
