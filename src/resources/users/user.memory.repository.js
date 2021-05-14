const User = require('./user.model');

const users = [];
users.push(new User(), new User(), new User());

const getAll = async () => users;

const getById = async id => users.find(user => user.id === id);

const postUser = async user => users.push(user);

const putUser = async user => {
  const userOld = users.find(el => el.id === user.id);
  return users.splice(users.indexOf(userOld), 1, user);
};

const deleteById = async (id) => {
  const userDel = users.find(user => user.id === id);
  users.splice(users.indexOf(userDel), 1);
};

module.exports = { getAll, getById, postUser, putUser, deleteById };
