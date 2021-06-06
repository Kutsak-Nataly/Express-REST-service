import {v4 as uuid} from 'uuid';

/**
 * Class representing Task
 */
class Task {
    /**
     * Create a Task
     * @param id {string} - Unique identification number in the database of user
     * @param title {string} - Short name of the task, which is displayed on the task card
     * @param order {number} - Sequential number of the task on the board
     * @param description {string} - Short description of the task
     * @param userId {string} - Secondary key for linking database tables many tasks for one user
     * @param boardId {string} - Unique identification number in the database of board
     * @param columnId {string} - Unique identification number in the database of column
     */
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
