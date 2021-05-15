const DB = require('../../datebase/db');

const { tasks } = DB;

const getAll = async boardId => tasks.find(task => task.boardId === boardId);

const getById = async (boardId, id) => tasks.find(task => (task.id === id && task.boardId === boardId));

const postTask = async task => tasks.push(task);

const putTask = async task => {
  const taskOld = tasks.find(el => (el.id === task.id && el.boardId === task.boardId));
  return tasks.splice(tasks.indexOf(taskOld), 1, task);
};

const deleteById = async (boardId, id) => {
  const userDel = tasks.find(task => (task.boardId === boardId && task.id === id));
  tasks.splice(tasks.indexOf(userDel), 1);
  return userDel;
};
const removeByBoard = async boardId => {
  DB.tasks = tasks.filter(task => (task.boardId !== boardId));
};

const updateTasks = async userId => {
  await tasks.map(task => {
      if (task.userId === userId) {
        this.task.userId = null;
      }
      return task;
    }
  );
};

module.exports = { getAll, getById, postTask, putTask, deleteById, removeByBoard, updateTasks };
