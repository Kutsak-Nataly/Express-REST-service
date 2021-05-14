const uuid = require('uuid');

class Board {
  constructor({
                id = uuid.v4(),
                title = 'string',
                columns = 'string'
              } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

module.exports = Board;
