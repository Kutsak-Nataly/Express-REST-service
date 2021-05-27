const uuid = require('uuid');
/**
 * Class representing Column
 */
class Column {
  /**
   * Create a Column
   * @param id {string} - Unique identification number in the database of column
   * @param title {string} - Short name of the column, which is displayed in the column area
   * @param order {number} - Sequential number of the column on the board
   */
  constructor({
    id = uuid.v4(),
    title = 'Title',
    order = 0,
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }
}

module.exports = Column;
