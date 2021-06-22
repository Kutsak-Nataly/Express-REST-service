/* eslint-disable import/no-cycle */
import {v4 as uuid} from 'uuid';
import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {Board} from '../board/board.model';
import {User} from '../users/user.model';
import {ColumnBoard} from '../columns/column.model';

@Entity({name: 'task'})
class Task {
    @Column({default: ''})
    title: string;
    @Column({default: 0})
    order: number;
    @Column({default: ''})
    description: string;
    @ManyToOne(() => User, user => user.tasks, {eager: false, onDelete: 'SET NULL', nullable: true})
    user?: User;
    @Column({ nullable: true })
    userId: string | null;
    @ManyToOne(() => Board, board => board.tasks, {eager: false, onDelete: 'CASCADE'})
    board?: Board;
    @Column({ nullable: true })
    boardId: string;
    @ManyToOne(() => ColumnBoard, column => column.tasks, {eager: false, onDelete: 'CASCADE'})
    column?: ColumnBoard;
    @Column({ nullable: true })
    columnId: string;
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    constructor(title: string = 'string', order: number = 0, description: string = 'string', userId: string | null,
                boardId: string, columnId: string, id: string = uuid()) {
        this.title = title;
        this.order = order;
        this.description = description;
        this.userId = userId;
        this.boardId = boardId;
        this.columnId = columnId;
        this.id = id;
    }
}

export {Task};
