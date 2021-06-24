import {getRepository} from 'typeorm';
import {Board} from './board.model';
import {MyError} from '../../error_handler/myError';

const getAll = async (): Promise<Board[]> => {
    const boardRepository = getRepository(Board);
    return boardRepository.find();
};
const getById = async (id: string): Promise<Board | undefined> => {
    const boardRepository = getRepository(Board);
    return boardRepository.findOne(id);
};
const postBoard = async (board: Board): Promise<Board> => {
    const boardNew = getRepository(Board).save(board);
    return boardNew;
};
const putBoard = async (board: Board): Promise<Board> => {
    const boardApd = getRepository(Board).save(board);
    return boardApd;
};
const deleteById = async (id: string): Promise<void> => {
    const removeResult = await getRepository(Board).delete(id);
    if (removeResult.affected === 0) throw new MyError(`Error delete By Id = ${id} Board`, 'error', 400);
};
const boardRepo = {getAll, getById, postBoard, putBoard, deleteById};

export {boardRepo};
