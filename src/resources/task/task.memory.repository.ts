/**
 * @fileOverview The module from which queries are made to the database table Task
 * @module task.memory.repository
 * @requires DB
 * @type {{columns, boards, users, tasks}}
 */
import {DB} from '../../datebase/db';
import {Task} from "./task.model";

const {tasks} = DB;
/**
 * Get all tasks from board with boardId
 * @param boardId {string} - Unique identification parameter of Board
 * @returns {Promise<Task[]>}
 */
const getAll = async (boardId: string) => tasks.filter(task => task.boardId === boardId);
/**
 * Get task by id from board with boardId
 * @param boardId {string} - Unique identification parameter of Board
 * @param id {string} - Unique identification parameter of Task
 * @returns {Promise<Task>}
 */
const getById = async (boardId: string, id: string) => tasks.find(task => (task.id === id && task.boardId === boardId));
/**
 * Create new Task
 * @param task {Task} - Instance class Task
 * @returns {Promise<number>}
 */
const postTask = async (task: Task) => tasks.push(task);
/**
 * Edit task in date base
 * @param task {Task} - Instance class Task
 * @returns {Promise<void>}
 */
const putTask = async (task: Task) => {
    const taskIndex = tasks.findIndex(el => (el.id === task.id && el.boardId === task.boardId));
    tasks.splice(taskIndex, 1, task);
};
/**
 * Delete task by id from board with boardId
 * @param boardId {string} - Unique identification parameter of board
 * @param id {string} - Unique identification parameter of task
 * @returns {Promise<void>}
 */
const deleteById = async (boardId: string, id: string) => {
    const userIndex = tasks.findIndex(task => (task.boardId === boardId && task.id === id));
    tasks.splice(userIndex, 1);
};
/**
 * Deleting all tasks with boardId when deleting a board
 * @param boardId {string} - Unique identification parameter of Board
 */
const removeByBoard = (boardId: string) => {
    const tasksDel: Task[] = tasks.filter(task => (task.boardId === boardId));
    tasksDel.forEach(taskDel => {
        tasks.splice(tasks.indexOf(taskDel), 1);
    });
};
/**
 * When a user is deleted, the tasks belonging to him are edited: for these tasks userId = null
 * @param userId {string} - Unique identification parameter of user
 */
const updateTasksByUser = (userId: string) => {
    tasks.forEach(task => {
        if (task.userId === userId) {
            task.userId = null;
        }
    })
    // for (let i = 0; i < tasks.length; i += 1) {
    //     if (tasks[i].userId === userId) {
    //         tasks[i].userId = null;
    //     }
    // }
};

const taskRepo = {getAll, getById, postTask, putTask, deleteById, removeByBoard, updateTasksByUser};

export {taskRepo};
