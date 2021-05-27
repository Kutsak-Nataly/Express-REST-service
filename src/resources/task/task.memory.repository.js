/**
 * @fileOverview The module from which queries are made to the database table Task
 * @module task.memory.repository
 * @requires DB
 * @type {{columns, boards, users, tasks}}
 */
const DB = require('../../datebase/db');

const { tasks } = DB;
/**
 * Get all tasks from board with boardId
 * @param boardId {string} - Unique identification parameter of Board
 * @returns {Promise<Task[]>}
 */
const getAll = async boardId => tasks.filter(task => task.boardId === boardId);
/**
 * Get task by id from board with boardId
 * @param boardId {string} - Unique identification parameter of Board
 * @param id {string} - Unique identification parameter of Task
 * @returns {Promise<Task>}
 */
const getById = async (boardId, id) => tasks.find(task => (task.id === id && task.boardId === boardId));
/**
 * Create new Task
 * @param task {Task} - Instance class Task
 * @returns {Promise<number>}
 */
const postTask = async task => tasks.push(task);
/**
 * Edit task in date base
 * @param task {Task} - Instance class Task
 * @returns {Promise<void>}
 */
const putTask = async task => {
  const taskOld = tasks.find(el => (el.id === task.id && el.boardId === task.boardId));
  tasks.splice(tasks.indexOf(taskOld), 1, task);
};
/**
 * Delete task by id from board with boardId
 * @param boardId {string} - Unique identification parameter of board
 * @param id {string} - Unique identification parameter of task
 * @returns {Promise<void>}
 */
const deleteById = async (boardId, id) => {
  const userDel = tasks.find(task => (task.boardId === boardId && task.id === id));
  tasks.splice(tasks.indexOf(userDel), 1);
};
/**
 * Deleting all tasks whith boardId when deleting a board
 * @param boardId {string} - Unique identification parameter of Board
 */
const removeByBoard = boardId => {
  const tasksDel = tasks.filter(task => (task.boardId === boardId));
  tasksDel.forEach(taskDel => {
    tasks.splice(tasks.indexOf(taskDel), 1);
  });
};
/**
 * When a user is deleted, the tasks belonging to him are edited: for these tasks userId = null
 * @param userId {string} - Unique identification parameter of user
 */
const updateTasksByUser = userId => {
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].userId === userId) {
      tasks[i].userId = null;
    }
  }
};

module.exports = { getAll, getById, postTask, putTask, deleteById, removeByBoard, updateTasksByUser };
