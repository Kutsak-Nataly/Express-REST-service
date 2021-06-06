import {v4 as uuid} from 'uuid';

class Column {
  title: string;
  order: number;
  id?: string;

  constructor(title: string = 'Title', order: number = 0, id: string = uuid()) {
    this.title = title;
    this.order = order;
    this.id = id;
  }
}

export {Column};
