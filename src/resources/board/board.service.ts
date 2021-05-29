/**
 * @fileOverview Middle layer by layer pattern. This layer contains the business logic for processing requests. Everything related to the board
 * @module board.service
 * @requires boardRepo
 * @requires removeByBoard
 * @type {{postBoard, getAll, putBoard, getById, deleteById}|*}
 */
import {boardRepo} from './board.memory.repository';
import {taskService} from '../task/task.service';
import {Board} from "./board.model";

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
const getById = (id:string) => boardRepo.getById(id);
/**
 * Create new board
 * @param board {Board} - Instance class Board
 * @returns {Promise<number>}
 */
const postBoard = (board:Board) => boardRepo.postBoard(board);
/**
 * Edit board
 * @param board {Board} - Instance class Board
 * @returns {Promise<Board[]>}
 */
const putBoard = (board:Board) => boardRepo.putBoard(board);
/**
 * Delete board by id
 * @param id {string} - Unique identification parameter of board
 * @returns {Promise<void>}
 */
const deleteById = async (id: string) => {
    await boardRepo.deleteById(id);
    await taskService.removeByBoard(id);
};

const boardService = {getAll, getById, postBoard, putBoard, deleteById};

export {boardService};
