import {v4 as uuid} from 'uuid';
import {Column, Entity, JoinColumn, OneToMany, PrimaryColumn} from 'typeorm';
import {ColumnBoard} from '../columns/column.model';

@Entity()
class Board {
    @Column()
    title: string;
    @OneToMany(() => ColumnBoard, column => column.id)
    @JoinColumn()
    columns: ColumnBoard[];
    @PrimaryColumn('uuid')
    id?: string;

    constructor(title: string = 'string', columns: ColumnBoard[], id: string = uuid()) {
        this.title = title;
        this.columns = columns;
        this.id = id;
    }
}

export {Board};
