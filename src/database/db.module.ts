import {User} from '../resources/users/user.model';
import {Board} from '../resources/board/board.model';
import {Task} from '../resources/task/task.model';
import {ColumnBoard} from '../resources/columns/column.model';

class DataBase {
    users: User[];
    boards: Board[];
    tasks: Task[];
    columns: ColumnBoard[];

    constructor(users: User[] = [], boards: Board[] = [], tasks: Task[] = [], columns: ColumnBoard[] = []) {
        this.users = users;
        this.boards = boards;
        this.tasks = tasks;
        this.columns = columns;
    }
}

export {DataBase};
