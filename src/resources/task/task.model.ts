import {v4 as uuid} from 'uuid';
import {Column, Entity, JoinColumn, OneToOne, PrimaryColumn} from 'typeorm';
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
    @OneToOne(() => User, user => user.id)
    @JoinColumn()
    userId: string | null;
    @OneToOne(() => Board, board => board.id)
    @JoinColumn()
    boardId: string;
    @OneToOne(() => ColumnBoard, column => column.id)
    @JoinColumn()
    columnId: string | null;
    @PrimaryColumn('uuid')
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
