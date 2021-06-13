import {User} from '../resources/users/user.model';
import {Board} from '../resources/board/board.model';
import {Task} from '../resources/task/task.model';
import {Column} from '../resources/columns/column.model';
import {DataBase} from './db.module';

const DB = new DataBase();

(() => {
    const user = new User();
    DB.users.push(user);
    const column = new Column();
    DB.columns.push(column);
    const board = new Board('Board 1', [column]);
    DB.boards.push(board);
    const task = new Task('Task 1', 0, 'description Task 1', user.id, board.id, column.id);
    DB.tasks.push(task);
})();

export {DB};
