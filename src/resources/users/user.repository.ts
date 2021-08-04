import {getRepository} from 'typeorm';
import bcrypt from 'bcrypt';
import {User} from './user.model';
import {MyError} from '../../error_handler/myError';
import {CRYPT_SALT} from '../../common/config';

const getAll = async (): Promise<User[]> => {
    const userRepository = getRepository(User);
    const users = await userRepository.find();
    return users;
};
const getById = async (id: string): Promise<User | undefined> => {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne({id});
    return user;
};
const getByLogin = async (login: string): Promise<User | undefined> => {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne({login});
    return user;
};
const postUser = async (user: User): Promise<User> => {
    const userHash = user;
    userHash.password = await bcrypt.hash(userHash.password, +CRYPT_SALT);
    const userNew = await getRepository(User).save(userHash);
    return userNew;
};
const putUser = async (user: User): Promise<User> => {
    const userHash = user;
    userHash.password = await bcrypt.hash(userHash.password, +CRYPT_SALT);
    const userApd = await getRepository(User).save(userHash);
    return userApd;
};
const deleteById = async (id: string): Promise<void> => {
    const removeResult = await getRepository(User).delete({id});
    if (removeResult.affected === 0) throw new MyError(`Error delete By Id ${id} User`, 'error', 404);
};

const usersRepo = {getAll, getById, postUser, putUser, deleteById, getByLogin};

export {usersRepo};
