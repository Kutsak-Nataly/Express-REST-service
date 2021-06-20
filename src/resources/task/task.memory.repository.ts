import {getRepository} from 'typeorm';
import {Task} from "./task.model";

const getAll = async (boardId: string): Promise<Task[]> => {
    const tasks = await getRepository(Task)
        .createQueryBuilder('task')
        .where('task.boardId = :boardId', {boardId})
        .getMany();
    return tasks;
};
const getById = async (boardId: string, id: string): Promise<Task | undefined> => {
    const task = await getRepository(Task)
        .createQueryBuilder('task')
        .where('task.boardId = :boardId AND task.id = :id', {boardId, id})
        .getOne();
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
const deleteById = async (boardId: string, id: string): Promise<void> => {
    await getRepository(Task)
        .createQueryBuilder('task')
        .delete()
        .where('task.boardId = :boardId AND task.id = :id', {boardId, id});
};
const removeByBoard = (boardId: string): void => {
    getRepository(Task)
        .createQueryBuilder('task')
        .delete()
        .where('task.boardId = :boardId', {boardId});
};
const updateTasksByUser = (userId: string): void => {
    getRepository(Task)
        .createQueryBuilder('task')
        .update()
        .set({userId: null})
        .where('task.userId = :userId', {userId});
};

const taskRepo = {getAll, getById, postTask, putTask, deleteById, removeByBoard, updateTasksByUser};

export {taskRepo};
