import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {v4 as uuid} from 'uuid';
import {Board} from '../board/board.model';

@Entity()
class ColumnBoard {

  @Column()
  title: string;
  @Column()
  order: number;
  @ManyToOne(() => Board, board => board.id)
  @JoinColumn({name: 'boardId'})
  boardId: string;
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  constructor(title: string = 'Title', order: number = 0, boardId: string = 'string', id: string = uuid()) {
    this.title = title;
    this.order = order;
    this.boardId = boardId;
    this.id = id;
  }
}

export {ColumnBoard};
