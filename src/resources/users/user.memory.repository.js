/**
 * @fileOverview The module from which queries are made to the database table User
 * @module user.memory.repository
 * @requires DB
 * @type {{columns, boards, users, tasks}}
 */
const DB = require('../../datebase/db');

const {users} = DB;
/**
 * Get all users
 * @returns {Promise<User[]>}
 */
const getAll = async () => users;
/**
 * Get user by id
 * @param id {string} - Unique identification parameter of User
 * @returns {Promise<void>}
 */
const getById = async id => users.find(user => user.id === id);
/**
 * Create new user
 * @param user {User} - Instance class User
 * @returns {Promise<number>}
 */
const postUser = async user => users.push(user);
/**
 * Editing data about user
 * @param user {User} - Instance class User
 * @returns {Promise<User[]>}
 */
const putUser = async user => {
  const userOld = users.find(el => el.id === user.id);
  return users.splice(users.indexOf(userOld), 1, user);
};
/**
 * Delete User by id
 * @param id {string} - Unique identification parameter of User
 * @returns {Promise<void>}
 */
const deleteById = async (id) => {
  const userDel = users.find(user => user.id === id);
  users.splice(users.indexOf(userDel), 1);
};

module.exports = { getAll, getById, postUser, putUser, deleteById };
