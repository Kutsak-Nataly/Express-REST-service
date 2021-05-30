/**
 * @fileOverview The module from which queries are made to the database table Board
 * @module board.memory.repository
 * @requires DB
 * @type {{columns, boards, users, tasks}}
 */
import {Board} from "./board.model";
import {DB} from '../../datebase/db';

const {boards} = DB;
/**
 * Get all boards
 * @returns {Promise<Board[]>}
 */
const getAll = async (): Promise<Board[]> => boards;
/**
 * Get board by id
 * @param id {string} - Unique identification parameter of Board
 * @returns {Promise<void>}
 */
const getById = async (id: string): Promise<Board | undefined> => boards.find((board: Board) => board.id === id);
/**
 * Create new board
 * @param board {Board} - Instance class Board
 * @returns {Promise<number>}
 */
const postBoard = async (board: Board) :Promise<number>  => boards.push(board);
/**
 * Edit data about Board
 * @param board {Board} - Instance class Board
 * @returns {Promise<Board[]>}
 */
const putBoard = async (board: Board): Promise<Board[]> => {
    const boardIndex = boards.findIndex((el: Board) => el.id === board.id);
    return boards.splice(boardIndex, 1, board);
};
/**
 * Delete board by id
 * @param id {string} - Unique identification parameter of board
 * @returns {Promise<void>}
 */
const deleteById = async (id: string) : Promise<void> => {
    const boardIndex = boards.findIndex((board: Board) => board.id === id);
    boards.splice(boardIndex, 1);
};

const boardRepo = {getAll, getById, postBoard, putBoard, deleteById};

export {boardRepo};
