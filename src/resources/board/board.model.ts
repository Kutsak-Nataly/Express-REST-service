import {v4 as uuid} from 'uuid';
import {Column} from '../columns/column.model';

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
    title: string;
    columns: Column[];
    id?: string;

    constructor(title: string = 'string', columns: Column[] = [], id: string = uuid()) {
        this.title = title;
        this.columns = columns;
        this.id = id;
    }
}

export {Board};
