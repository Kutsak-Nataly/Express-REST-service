const uuid = require('uuid');

class Task {
  constructor({
                id = uuid.v4(),
                title = 'string',
                order = 'string',
                description = 'string',
                userId = 'string || null', // assignee
                boardId = 'string',
                columnId = 'string'
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
