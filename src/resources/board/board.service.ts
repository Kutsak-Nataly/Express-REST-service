import {boardRepo} from './board.repository';
import {Board} from './board.model';

const getAll = (): Promise<Board[]> => boardRepo.getAll();
const getById = (id: string): Promise<Board | undefined> => boardRepo.getById(id);
const postBoard = (board: Board): Promise<Board> => boardRepo.postBoard(board);
const putBoard = (board: Board): Promise<Board> => boardRepo.putBoard(board);
const deleteById = (id: string): Promise<void> =>boardRepo.deleteById(id);

const boardService = {getAll, getById, postBoard, putBoard, deleteById};

export {boardService};
