import {getRepository} from 'typeorm';
import {Board} from './board.model';

const getAll = async (): Promise<Board[]> => {
    const boardRepository = getRepository(Board);
    return boardRepository.find();
};
const getById = async (id: string): Promise<Board | undefined> => {
    const boardRepository = getRepository(Board);
    return boardRepository.findOne(id);
};
const postBoard = async (board: Board): Promise<Board> => {
    const boardRepository = getRepository(Board);
    return boardRepository.save(board);
};
const putBoard = async (board: Board): Promise<Board> => {
    const boardRepository = getRepository(Board);
    return boardRepository.save(board);
};
const deleteById = async (id: string): Promise<void> => {
    const boardRepository = getRepository(Board);
    const removeResult = await boardRepository.delete(id);
    if (!removeResult.affected) throw new Error('Error delete By Id Board');
};
const boardRepo = {getAll, getById, postBoard, putBoard, deleteById};

export {boardRepo};
