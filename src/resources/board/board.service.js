/**
 * @fileOverview Middle layer by layer pattern. This layer contains the business logic for processing requests. Everything related to the board
 * @module board.service
 * @requires boardRepo
 * @requires removeByBoard
 * @type {{postBoard, getAll, putBoard, getById, deleteById}|*}
 */
const boardRepo = require('./board.memory.repository');
const { removeByBoard } = require('../task/task.service');
/**
 * Get all boards
 * @returns {Promise<Board[]>}
 */
const getAll = () => boardRepo.getAll();
/**
 * Get board by id
 * @param id {string} - Unique identification parameter of board
 * @returns {Promise<void>}
 */
const getById = id => boardRepo.getById(id);
/**
 * Create new board
 * @param board {Board} - Instance class Board
 * @returns {Promise<number>}
 */
const postBoard = board => boardRepo.postBoard(board);
/**
 * Edit board
 * @param board {Board} - Instance class Board
 * @returns {Promise<Board[]>}
 */
const putBoard = board => boardRepo.putBoard(board);
/**
 * Delete board by id
 * @param id {string} - Unique identification parameter of board
 * @returns {Promise<void>}
 */
const deleteById = async id => {
  await boardRepo.deleteById(id);
  await removeByBoard(id);
};

module.exports = { getAll, getById, postBoard, putBoard, deleteById };
