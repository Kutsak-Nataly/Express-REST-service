/**
 * @fileOverview Middle layer by layer pattern. This layer contains the business logic for processing requests. Everything related to the tasks
 * @module task.service
 * @requires taskRepo
 * @type {{getAll, getById, deleteById, updateTasksByUser, postTask, putTask, removeByBoard}|*}
 */
const taskRepo = require('./task.memory.repository');
/**
 * Get all tasks
 * @param boardId {string} - Unique identification parameter of task
 * @returns {Promise<Task[]>}
 */
const getAll = boardId => taskRepo.getAll(boardId);
/**
 * Get task by id
 * @param boardId {string} - Unique identification parameter of board
 * @param id {string} - Unique identification parameter of task
 * @returns {Promise<Task>}
 */
const getById = (boardId, id) => taskRepo.getById(boardId, id);
/**
 * Create new task
 * @param task {Task} - Instance class Task
 * @returns {Promise<number>}
 */
const postTask = task => taskRepo.postTask(task);
/**
 * Edit task
 * @param task {Task} - Instance class Task
 * @returns {Promise<void>}
 */
const putTask = task => taskRepo.putTask(task);
/**
 * Delete task by id from board with boardId
 * @param boardId {string} - Unique identification parameter of board
 * @param id {string} - Unique identification parameter of task
 * @returns {Promise<void>}
 */
const deleteById = (boardId, id) => taskRepo.deleteById(boardId, id);
/**
 * Deleting all tasks whith boardId when deleting a board
 * @param boardId {string} - Unique identification parameter of Board
 */
const removeByBoard = boardId => taskRepo.removeByBoard(boardId);
/**
 *
 * @param userId
 */
const updateTasksByUser = userId => taskRepo.updateTasksByUser(userId);

module.exports = { getAll, getById, postTask, putTask, deleteById, removeByBoard, updateTasksByUser };
