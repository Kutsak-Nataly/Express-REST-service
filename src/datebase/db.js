const User = require('../resources/users/user.model');
const Board = require('../resources/board/board.model');
const Task = require('../resources/task/task.model');
const Column = require('../resources/columns/column.model');

const DB = {
  users: [],
  boards: [],
  tasks: [],
  columns: []
};

// init DB with mock date
(() => {
  const user = new User();
  DB.users.push(user, new User());
  const column = new Column();
  DB.columns.push(new Column());
  const board = new Board({ columns: [column] });
  DB.boards.push(board);
  DB.columns.push(board.columns);
  DB.tasks.push(new Task({ boardId: board.id, userId: user.id, columnId: column.id }));
})();

module.exports = DB;
