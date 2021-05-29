import {v4 as uuid} from 'uuid';

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
  title: string;
  order: number;
  id?: string;

  constructor(title: string = 'Title', order: number = 0, id: string = uuid()) {
    this.title = title;
    this.order = order;
    this.id = id;
  }
}

export {Column};
