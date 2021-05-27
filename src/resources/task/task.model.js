const uuid = require('uuid');
/**
 * Class representing Task
 */
class Task {
    /**
     * Create a Task
     * @param id {string} - Unique identification number in the database of user
     * @param title {string} - Short name of the task, which is displayed on the task card
     * @param order {number} - Sequential number of the task on the board
     * @param description {string} - Short description of the task
     * @param userId {string} - Secondary key for linking database tables many tasks for one user
     * @param boardId {string} - Unique identification number in the database of board
     * @param columnId {string} - Unique identification number in the database of column
     */
  constructor({
                id = uuid.v4(),
                title = 'string',
                order = 0,
                description = 'string',
                userId = null,
                boardId = 'string',
                columnId = null
              } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}

module.exports = Task;
