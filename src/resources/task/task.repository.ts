import {getRepository} from 'typeorm';
import {Task} from "./task.model";
import {MyError} from '../../error_handler/myError';

const getAll = async (boardId: string): Promise<Task[]> => {
    const tasks = await getRepository(Task).find({where: {boardId}});
    return tasks;
};
const getById = async (boardId: string, id: string): Promise<Task | undefined> => {
    const task = await getRepository(Task).findOne({where: {boardId, id}});
    return task;
};
const postTask = async (task: Task): Promise<Task> => {
    const taskNew = await getRepository(Task).save(task);
    return taskNew;
};
const putTask = async (task: Task): Promise<Task> => {
    const taskApd = await getRepository(Task).save(task);
    return taskApd;
};
const deleteById = async (_boardId: string, id: string): Promise<void> => {
    const removeResult = await getRepository(Task).delete({id});
    if (removeResult.affected === 0) throw new MyError(`Error delete By Id ${id} Task`, 'error', 404);
};

const taskRepo = {getAll, getById, postTask, putTask, deleteById};

export {taskRepo};
