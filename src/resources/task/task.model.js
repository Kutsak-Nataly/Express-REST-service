const uuid = require('uuid');

class Task {
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
