import {usersRepo} from './user.memory.repository';
import {User} from './user.model';

const getAll = (): Promise<User[]> => usersRepo.getAll();
const getById = (id: string): Promise<User | undefined> => usersRepo.getById(id);
const postUser = (user: User): Promise<User> => usersRepo.postUser(user);
const putUser = (user: User): Promise<User> => usersRepo.putUser(user);
const deleteById = (id: string): Promise<void> => usersRepo.deleteById(id);

const usersService = {getAll, getById, postUser, putUser, deleteById};

export {usersService};
