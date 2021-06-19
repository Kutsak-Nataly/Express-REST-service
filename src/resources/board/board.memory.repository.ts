import {Board} from './board.model';
import {DB} from '../../database/db';

const {boards} = DB;
const getAll = async (): Promise<Board[]> => boards;
const getById = async (id: string): Promise<Board | undefined> => boards.find((board: Board) => board.id === id);
const postBoard = async (board: Board): Promise<number> => boards.push(board);
const putBoard = async (board: Board): Promise<Board[]> => {
    const boardIndex = boards.findIndex((el: Board) => el.id === board.id);
    return boards.splice(boardIndex, 1, board);
};
const deleteById = async (id: string): Promise<void> => {
    const boardIndex = boards.findIndex((board: Board) => board.id === id);
    boards.splice(boardIndex, 1);
};
const boardRepo = {getAll, getById, postBoard, putBoard, deleteById};

export {boardRepo};
