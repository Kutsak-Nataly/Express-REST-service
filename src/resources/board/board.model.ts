/* eslint-disable import/no-cycle */
import {v4 as uuid} from 'uuid';
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {ColumnBoard} from '../columns/column.model';
import {Task} from '../task/task.model';

@Entity({name: 'board'})
class Board {
    @Column({default: 'string'})
    title: string;
    @OneToMany(() => ColumnBoard, column => column.board, {cascade: ['insert', 'update', 'remove', 'soft-remove', 'recover'], eager: true})
    columns: ColumnBoard[];
    @OneToMany(() => Task, task => task.board, {cascade: ['remove']})
    tasks: Task[];
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    constructor(title: string = 'string', columns: ColumnBoard[], tasks: Task[], id: string = uuid()) {
        this.title = title;
        this.columns = columns;
        this.tasks = tasks;
        this.id = id;
    }
}

export {Board};
