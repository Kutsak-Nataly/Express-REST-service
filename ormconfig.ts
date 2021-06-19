import {ConnectionOptions} from 'typeorm';
import {
    TYPEORM_CONNECTION,
    TYPEORM_DATABASE,
    TYPEORM_HOST,
    TYPEORM_MAX_QUERY_EXECUTION_TIME,
    TYPEORM_PASSWORD,
    TYPEORM_PORT,
    TYPEORM_SYNCHRONIZE,
    TYPEORM_USERNAME
} from './common/config';
import {User} from './resources/users/user.model';
import {Task} from './resources/task/task.model';
import {ColumnBoard} from './resources/columns/column.model';
import {Board} from './resources/board/board.model';

const config = {
    type: 'postgres',
    name: TYPEORM_CONNECTION,
    host: TYPEORM_HOST,
    port: TYPEORM_PORT,
    username: TYPEORM_USERNAME,
    password: TYPEORM_PASSWORD,
    database: TYPEORM_DATABASE,
    synchronize: TYPEORM_SYNCHRONIZE,
    connectTimeoutMS: TYPEORM_MAX_QUERY_EXECUTION_TIME,
    entities: [
        User, Task, ColumnBoard, Board
    ],
    logging: false
} as ConnectionOptions;

export {config};
