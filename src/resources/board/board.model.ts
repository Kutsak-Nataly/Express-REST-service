import {v4 as uuid} from 'uuid';
import {Column, Entity, PrimaryColumn} from 'typeorm';
import {ColumnBoard} from '../columns/column.model';

@Entity()
class Board {
    @Column()
    title: string;
    @Column()
    columns: ColumnBoard[];
    @PrimaryColumn('uuid')
    id?: string;

    constructor(title: string = 'string', columns: ColumnBoard[] = [], id: string = uuid()) {
        this.title = title;
        this.columns = columns;
        this.id = id;
    }
}

export {Board};
