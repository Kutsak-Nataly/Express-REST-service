const DB = require('../../datebase/db');

const { tasks } = DB;

const getAll = async boardId => tasks.filter(task => task.boardId === boardId);

const getById = async (boardId, id) => tasks.find(task => (task.id === id && task.boardId === boardId));

const postTask = async task => tasks.push(task);

const putTask = async task => {
  const taskOld = tasks.find(el => (el.id === task.id && el.boardId === task.boardId));
  tasks.splice(tasks.indexOf(taskOld), 1, task);
};

const deleteById = async (boardId, id) => {
  const userDel = tasks.find(task => (task.boardId === boardId && task.id === id));
  tasks.splice(tasks.indexOf(userDel), 1);
};

const removeByBoard = boardId => {
  const tasksDel = tasks.filter(task => (task.boardId === boardId));
  tasksDel.forEach(taskDel => {
    tasks.splice(tasks.indexOf(taskDel), 1);
  });
};

const updateTasksByUser = userId => {
 tasks.forEach(task => {
    if (task.userId === userId) {
      // eslint-disable-next-line no-param-reassign
       task.userId = null;
    }
  });
};

module.exports = { getAll, getById, postTask, putTask, deleteById, removeByBoard, updateTasksByUser };
