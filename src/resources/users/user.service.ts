/**
 * @fileOverview Middle layer by layer pattern. This layer contains the business logic for processing requests. Everything related to the users/
 * @module user.service
 * @requires usersRepo
 * @requires  updateTasksByUser
 * @type {{putUser, getAll, postUser, getById, deleteById}|*}
 */
import {taskService} from '../task/task.service';
import {usersRepo} from './user.memory.repository';
import {User} from "./user.model";

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
const getById = (id: string) => usersRepo.getById(id);
/**
 * Create new user
 * @param user {User} - Instance class User
 * @returns {Promise<number>}
 */
const postUser = (user: User) => usersRepo.postUser(user);
/**
 * Editing data about user
 * @param user {User} - Instance class User
 * @returns {Promise<User[]>}
 */
const putUser = (user: User) => usersRepo.putUser(user);
/**
 * Delete user by id. When a user is deleted, the tasks belonging to him are edited: for these tasks userId = null
 * @param id {string} - Unique identification parameter of user
 */
const deleteById = async (id: string) => {
    await usersRepo.deleteById(id);
    await taskService.updateTasksByUser(id);
};

const usersService = {getAll, getById, postUser, putUser, deleteById};

export {usersService};
