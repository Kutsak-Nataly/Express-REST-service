import {boardRepo} from './board.memory.repository';
import {taskService} from '../task/task.service';
import {Board} from './board.model';

const getAll = (): Promise<Board[]> => boardRepo.getAll();
const getById = (id: string): Promise<Board | undefined> => boardRepo.getById(id);
const postBoard = (board: Board): Promise<Board> => boardRepo.postBoard(board);
const putBoard = (board: Board): Promise<Board> => boardRepo.putBoard(board);
const deleteById = async (id: string): Promise<void> => {
    await boardRepo.deleteById(id);
    await taskService.removeByBoard(id);
};
const boardService = {getAll, getById, postBoard, putBoard, deleteById};

export {boardService};
