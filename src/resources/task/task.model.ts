import {v4 as uuid} from 'uuid';
import {Column, Entity, PrimaryColumn} from 'typeorm';

@Entity()
class Task {
    @Column()
    title: string;
    @Column()
    order: number;
    @Column()
    description: string;
    @Column()
    userId: string | null;
    @Column()
    boardId: string;
    @Column()
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
