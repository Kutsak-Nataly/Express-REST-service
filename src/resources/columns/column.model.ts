/* eslint-disable import/no-cycle */
import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {v4 as uuid} from 'uuid';
import {Board} from '../board/board.model';
import {Task} from '../task/task.model';

@Entity({name: 'column'})
class ColumnBoard {

  @Column({default: 'Title'})
  title: string;
  @Column({default: 0})
  order: number;
  @ManyToOne(() => Board, board => board.columns, {onDelete: 'CASCADE'})
  board?: Board;
  @Column()
  boardId: string;
  @OneToMany(() => Task, task => task.column, {cascade: ['remove']})
  tasks: Task[];
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  constructor(title: string = 'Title', order: number = 0, boardId: string, tasks: Task[], id: string = uuid()) {
    this.title = title;
    this.order = order;
    this.boardId = boardId;
    this.tasks = tasks;
    this.id = id;
  }
}

export {ColumnBoard};
