import {Column, Entity, PrimaryColumn} from 'typeorm';
import {v4 as uuid} from 'uuid';

@Entity()
class ColumnBoard {

  @Column()
  title: string;
  @Column()
  order: number;
  @PrimaryColumn('uuid')
  id?: string;

  constructor(title: string = 'Title', order: number = 0, id: string = uuid()) {
    this.title = title;
    this.order = order;
    this.id = id;
  }
}

export {ColumnBoard};
