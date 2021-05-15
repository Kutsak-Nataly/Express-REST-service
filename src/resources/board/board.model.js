const uuid = require('uuid');
const Column = require('../columns/column.model');

class Board {
  constructor({
                id = uuid.v4(),
                title = 'string',
                columns = []
              } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns.map((col) => new Column(col));;
  }
}

module.exports = Board;
