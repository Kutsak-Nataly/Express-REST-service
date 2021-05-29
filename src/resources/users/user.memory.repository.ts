/**
 * @fileOverview The module from which queries are made to the database table User
 * @module user.memory.repository
 * @requires DB
 * @type {{columns, boards, users, tasks}}
 */
import {DB} from '../../datebase/db';
import {User} from './user.model';

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
const getById = async (id: string) => users.find(user => user.id === id);
/**
 * Create new user
 * @param user {User} - Instance class User
 * @returns {Promise<number>}
 */
const postUser = async (user: User) => users.push(user);
/**
 * Editing data about user
 * @param user {User} - Instance class User
 * @returns {Promise<User[]>}
 */
const putUser = async (user: User) => {
    const userIndex = users.findIndex(el => el.id === user.id);
    if (userIndex !== -1) {
        users.splice(userIndex, 1, user);
    }
};
/**
 * Delete User by id
 * @param id {string} - Unique identification parameter of User
 * @returns {Promise<void>}
 */
const deleteById = async (id: string) => {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
        users.splice(userIndex, 1);
    }
};

const usersRepo = {getAll, getById, postUser, putUser, deleteById};

export {usersRepo};
