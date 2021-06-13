import {v4 as uuid} from 'uuid';

class Task {

    title: string;
    order: number;
    description: string;
    userId: string | null;
    boardId: string;
    columnId: string | null;
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
