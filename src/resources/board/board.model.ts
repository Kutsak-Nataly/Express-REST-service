import {v4 as uuid} from 'uuid';
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
// eslint-disable-next-line import/no-cycle
import {ColumnBoard} from '../columns/column.model';

@Entity({name: 'board'})
class Board {
    @Column({default: 'string'})
    title: string;
    @OneToMany(() => ColumnBoard, column => column.board)
    columns: ColumnBoard[];
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    constructor(title: string = 'string', columns: ColumnBoard[], id: string = uuid()) {
        this.title = title;
        this.columns = columns;
        this.id = id;
    }
}

export {Board};
