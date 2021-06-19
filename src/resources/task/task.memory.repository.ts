import {DB} from '../../database/db';
import {Task} from "./task.model";

const {tasks} = DB;
const getAll = async (boardId: string): Promise<Task[]> => tasks.filter(task => task.boardId === boardId);
const getById = async (boardId: string, id: string): Promise<Task | undefined> => tasks.find(task => (task.id === id && task.boardId === boardId));
const postTask = async (task: Task): Promise<number> => tasks.push(task);
const putTask = async (task: Task): Promise<void> => {
    const taskIndex = tasks.findIndex(el => (el.id === task.id && el.boardId === task.boardId));
    tasks.splice(taskIndex, 1, task);
};
const deleteById = async (boardId: string, id: string): Promise<void> => {
    const userIndex = tasks.findIndex(task => (task.boardId === boardId && task.id === id));
    tasks.splice(userIndex, 1);
};
const removeByBoard = (boardId: string): void => {
    const tasksDel: Task[] = tasks.filter(task => (task.boardId === boardId));
    tasksDel.forEach(taskDel => {
        tasks.splice(tasks.indexOf(taskDel), 1);
    });
};
const updateTasksByUser = (userId: string): void => {
    tasks.forEach(task => {
        const currentTask = task;
        if (currentTask.userId === userId) {
            currentTask.userId = null;
        }
    })
};

const taskRepo = {getAll, getById, postTask, putTask, deleteById, removeByBoard, updateTasksByUser};

export {taskRepo};
