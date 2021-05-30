import {taskService} from '../task/task.service';
import {usersRepo} from './user.memory.repository';
import {User} from "./user.model";

const getAll = (): Promise<User[]> => usersRepo.getAll();
const getById = (id: string): Promise<User | undefined> => usersRepo.getById(id);
const postUser = (user: User): Promise<number> => usersRepo.postUser(user);
const putUser = (user: User): Promise<void> => usersRepo.putUser(user);
const deleteById = async (id: string): Promise<void> => {
    await usersRepo.deleteById(id);
    await taskService.updateTasksByUser(id);
};
const usersService = {getAll, getById, postUser, putUser, deleteById};

export {usersService};
