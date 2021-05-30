/**
 * Class representing DB
 * @requires User
 * @requires Board
 * @requires Task
 * @requires Column
 */
import {User} from "../resources/users/user.model";
import {Board} from '../resources/board/board.model';
import {Task} from '../resources/task/task.model';
import {Column} from '../resources/columns/column.model';

class DataBase {
    /**
     * Create a DataBase
     * @param users {User[]} - Unique identification number in the database of board
     * @param boards {Board[]} - Short name of the board, which is displayed in the board area
     * @param tasks {Task[]} - Array of instance from class Column
     * @param columns {Column[]} - Array of instance from class Column
     */
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
