import {getRepository} from 'typeorm';
import {User} from './user.model';
import {MyError} from '../../error_handler/myError';

const getAll = async (): Promise<User[]> => {
    const userRepository = getRepository(User);
    const users = await userRepository.find();
    return users;
};
const getById = async (id: string): Promise<User | undefined> => {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne(id);
    return user;
};
const getByLogin = async (login: string): Promise<User | undefined> => {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne({login});
    return user;
};
const postUser = async (user: User): Promise<User> => {
    const userNew = await getRepository(User).save(user);
    return userNew;
};
const putUser = async (user: User): Promise<User> => {
    const userApd = await getRepository(User).save(user);
    return userApd;
};
const deleteById = async (id: string): Promise<void> => {
    const removeResult = await getRepository(User).delete(id);
    if (removeResult.affected === 0) throw new MyError(`Error delete By Id ${id} User`, 'error', 404);
};

const usersRepo = {getAll, getById, postUser, putUser, deleteById, getByLogin};

export {usersRepo};
