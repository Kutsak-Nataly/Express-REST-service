import {v4 as uuid} from 'uuid';
import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {Board} from '../board/board.model';
import {User} from '../users/user.model';
import {ColumnBoard} from '../columns/column.model';

@Entity()
class Task {
    @Column()
    title: string;
    @Column()
    order: number;
    @Column()
    description: string;
    @ManyToOne(() => User, user => user.id)
    @JoinColumn({name: 'userId'})
    userId: string | null;
    @ManyToOne(() => Board, board => board.id)
    @JoinColumn({name: 'boardId'})
    boardId: string;
    @ManyToOne(() => ColumnBoard, column => column.id)
    @JoinColumn({name: 'columnId'})
    columnId: string | null;
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    constructor(title: string = 'string', order: number = 0, description: string = 'string', userId: string | null  = null, boardId: string = 'string', columnId: string | null = null, id: string = uuid()) {
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
