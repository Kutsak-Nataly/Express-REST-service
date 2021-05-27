const uuid = require('uuid');
const Column = require('../columns/column.model');
/**
 * Class representing Board
 */
class Board {
    /**
     * Create a board
     * @param id {string} - Unique identification number in the database of board
     * @param title {string} - Short name of the board, which is displayed in the board area
     * @param columns {Column[]} - Array of instance from class Column
     */
  constructor({
                id = uuid.v4(),
                title = 'string',
                columns = []
              } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns.map((col) => new Column(col));
  }
}

module.exports = Board;
