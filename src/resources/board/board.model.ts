import {v4 as uuid} from 'uuid';
import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
class Board {
    @Column()
    title: string;
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    constructor(title: string = 'string', id: string = uuid()) {
        this.title = title;
        this.id = id;
    }
}

export {Board};
