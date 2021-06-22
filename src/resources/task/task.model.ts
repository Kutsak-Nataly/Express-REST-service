import {v4 as uuid} from 'uuid';
import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity({ name: 'tasks' })
class Task {
    @Column({default: ''})
    title: string;
    @Column({default: 0})
    order: number;
    @Column({default: ''})
    description: string;
    @Column('varchar', { length: 255, default: null, nullable: true })
    userId: string | null;
    @Column('varchar', { length: 255, default: null, nullable: true })
    boardId: string;
    @Column('varchar', { length: 255, default: null, nullable: true })
    columnId: string | null;
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    constructor(title: string = 'string', order: number = 0, description: string = 'string', userId: string | null = null, boardId: string = 'string', columnId: string | null = null, id: string = uuid()) {
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
