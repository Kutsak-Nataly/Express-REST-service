"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const config_1 = require("./src/common/config");
const user_model_1 = require("./src/resources/users/user.model");
const task_model_1 = require("./src/resources/task/task.model");
const column_model_1 = require("./src/resources/columns/column.model");
const board_model_1 = require("./src/resources/board/board.model");
const config = {
    type: 'postgres',
    name: config_1.TYPEORM_CONNECTION,
    host: config_1.TYPEORM_HOST,
    port: config_1.TYPEORM_PORT,
    username: config_1.TYPEORM_USERNAME,
    password: config_1.TYPEORM_PASSWORD,
    database: config_1.TYPEORM_DATABASE,
    synchronize: config_1.TYPEORM_SYNCHRONIZE,
    connectTimeoutMS: config_1.TYPEORM_MAX_QUERY_EXECUTION_TIME,
    entities: [
        user_model_1.User, task_model_1.Task, column_model_1.ColumnBoard, board_model_1.Board
    ],
    logging: false
};
exports.config = config;
//# sourceMappingURL=ormconfig.js.map