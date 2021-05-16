const usersRepo = require('./user.memory.repository');
const { updateTasksByUser } = require('../task/task.service');

const getAll = () => usersRepo.getAll();
const getById = id => usersRepo.getById(id);
const postUser = user => usersRepo.postUser(user);
const putUser = user => usersRepo.putUser(user);
const deleteById =  async id => {
  await usersRepo.deleteById(id);
  await updateTasksByUser(id);
};

module.exports = { getAll, getById, postUser, putUser, deleteById };
