import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {v4 as uuid} from 'uuid';
// eslint-disable-next-line import/no-cycle
import {Board} from '../board/board.model';

@Entity({name: 'column'})
class ColumnBoard {

  @Column({default: 'Title'})
  title: string;
  @Column({default: 0})
  order: number;
  @ManyToOne(() => Board, board => board.id)
  board: Board;
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  constructor(title: string = 'Title', order: number = 0, board: Board, id: string = uuid()) {
    this.title = title;
    this.order = order;
    this.board = board;
    this.id = id;
  }
}

export {ColumnBoard};
