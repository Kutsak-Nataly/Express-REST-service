import {getRepository} from 'typeorm';
import {User} from './user.model';

const getAll = async (): Promise<User[]> => {
    const userRepository = getRepository(User);
    const users = await userRepository.find({});
    return users;
};
const getById = async (id: string): Promise<User | undefined> => {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne(id);
    return user;
};
const postUser = async (user: User): Promise<User> => {
    const userRepository = getRepository(User);
    const userNew = await userRepository.save(user);
    return userNew;
};
const putUser = async (user: User): Promise<User> => {
    const userRepository = getRepository(User);
    return userRepository.save(user);
};
const deleteById = async (id: string): Promise<void> => {
    const userRepository = getRepository(User);
    const removeResult = await userRepository.delete(id);
    if (!removeResult.affected) throw new Error('Error delete By Id User');
};
const usersRepo = {getAll, getById, postUser, putUser, deleteById};

export {usersRepo};
