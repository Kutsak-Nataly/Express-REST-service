import {DB} from '../../database/db';
import {User} from './user.model';

const {users} = DB;
const getAll = async (): Promise<User[]> => users;
const getById = async (id: string): Promise<User | undefined> => users.find(user => user.id === id);
const postUser = async (user: User): Promise<number> => users.push(user);
const putUser = async (user: User): Promise<void> => {
    const userIndex = users.findIndex(el => el.id === user.id);
    if (userIndex !== -1) {
        users.splice(userIndex, 1, user);
    }
};
const deleteById = async (id: string): Promise<void> => {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
        users.splice(userIndex, 1);
    }
};
const usersRepo = {getAll, getById, postUser, putUser, deleteById};

export {usersRepo};
