const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const getById = id => usersRepo.getById(id);
const postUser = user => usersRepo.postUser(user);
const putUser = id => usersRepo.putUser(id);
const deleteById = id => usersRepo.deleteById(id);

module.exports = { getAll, getById, postUser, putUser, deleteById };
