/**
 * @fileOverview Middle layer by layer pattern. This layer contains the business logic for processing requests. Everything related to the users/
 * @module user.service
 * @requires usersRepo
 * @requires  updateTasksByUser
 * @type {{putUser, getAll, postUser, getById, deleteById}|*}
 */
const usersRepo = require('./user.memory.repository');
const { updateTasksByUser } = require('../task/task.service');
/**
 * Get all users
 * @returns {Promise<User[]>}
 */
const getAll = () => usersRepo.getAll();
/**
 * Get user by id
 * @param id {string} - Unique identification parameter of user
 * @returns {Promise<void>}
 */
const getById = id => usersRepo.getById(id);
/**
 * Create new user
 * @param user {User} - Instance class User
 * @returns {Promise<number>}
 */
const postUser = user => usersRepo.postUser(user);
/**
 * Editing data about user
 * @param user {User} - Instance class User
 * @returns {Promise<User[]>}
 */
const putUser = user => usersRepo.putUser(user);
/**
 * Delete user by id. When a user is deleted, the tasks belonging to him are edited: for these tasks userId = null
 * @param id {string} - Unique identification parameter of user
 */
const deleteById =  async id => {
  await usersRepo.deleteById(id);
  await updateTasksByUser(id);
};

module.exports = { getAll, getById, postUser, putUser, deleteById };
