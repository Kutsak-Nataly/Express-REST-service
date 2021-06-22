import {taskRepo} from './task.memory.repository';
import {Task} from "./task.model";

const getAll = (boardId: string): Promise<Task[]> => taskRepo.getAll(boardId);
const getById = (boardId: string, id: string): Promise<Task | undefined> => taskRepo.getById(boardId, id);
const postTask = (task:Task): Promise<Task> => taskRepo.postTask(task);
const putTask = (task:Task): Promise<Task> => taskRepo.putTask(task);
const deleteById = (boardId: string, id: string): Promise<void> => taskRepo.deleteById(boardId, id);

const taskService = {getAll, getById, postTask, putTask, deleteById};

export {taskService};
