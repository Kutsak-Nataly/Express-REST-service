import {User} from '../resources/users/user.model';
import {Board} from '../resources/board/board.model';
import {Task} from '../resources/task/task.model';
import {Column} from '../resources/columns/column.model';

class DataBase {
    users: User[];
    boards: Board[];
    tasks: Task[];
    columns: Column[];

    constructor(users: User[] = [], boards: Board[] = [], tasks: Task[] = [], columns: Column[] = []) {
        this.users = users;
        this.boards = boards;
        this.tasks = tasks;
        this.columns = columns;
    }
}

export {DataBase};
