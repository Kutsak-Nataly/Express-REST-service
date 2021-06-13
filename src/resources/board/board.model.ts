import {v4 as uuid} from 'uuid';
import {Column} from '../columns/column.model';

class Board {

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
