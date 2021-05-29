/**
 * @fileOverview Middle layer by layer pattern. This layer contains the business logic for processing requests. Everything related to the tasks
 * @module task.service
 * @requires taskRepo
 * @type {{getAll, getById, deleteById, updateTasksByUser, postTask, putTask, removeByBoard}|*}
 */
import {taskRepo} from './task.memory.repository';
import {Task} from "./task.model";

/**
 * Get all tasks
 * @param boardId {string} - Unique identification parameter of task
 * @returns {Promise<Task[]>}
 */
const getAll = (boardId: string) => taskRepo.getAll(boardId);
/**
 * Get task by id
 * @param boardId {string} - Unique identification parameter of board
 * @param id {string} - Unique identification parameter of task
 * @returns {Promise<Task>}
 */
const getById = (boardId: string, id: string) => taskRepo.getById(boardId, id);
/**
 * Create new task
 * @param task {Task} - Instance class Task
 * @returns {Promise<number>}
 */
const postTask = (task:Task) => taskRepo.postTask(task);
/**
 * Edit task
 * @param task {Task} - Instance class Task
 * @returns {Promise<void>}
 */
const putTask = (task:Task) => taskRepo.putTask(task);
/**
 * Delete task by id from board with boardId
 * @param boardId {string} - Unique identification parameter of board
 * @param id {string} - Unique identification parameter of task
 * @returns {Promise<void>}
 */
const deleteById = (boardId: string, id: string) => taskRepo.deleteById(boardId, id);
/**
 * Deleting all tasks with boardId when deleting a board
 * @param boardId {string} - Unique identification parameter of Board
 */
const removeByBoard = (boardId: string) => taskRepo.removeByBoard(boardId);
/**
 * Updating task data when deleting a user
 * @param userId
 */
const updateTasksByUser = (userId: string) => taskRepo.updateTasksByUser(userId);

const taskService = {getAll, getById, postTask, putTask, deleteById, removeByBoard, updateTasksByUser};

export {taskService};
