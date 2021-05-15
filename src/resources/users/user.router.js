const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
  res.status(200).json(users);
});

router.route('/:id').get(async (req, res) => {
  const user = await usersService.getById(req.params.id);
  res.json(User.toResponse(user));
  res.status(200).json(user);
});

router.route('/').post(async (req, res) => {
  const user = new User({
    name: req.body.name,
    login: req.body.login,
    password: req.body.password
  });
  await usersService.postUser(user);
  res.json(User.toResponse(user));
  res.status(201).json(user);
});

router.route('/:id').put(async (req, res) => {
  const user = {
    id: req.params.id,
    name: req.body.name,
    login: req.body.login,
    password: req.body.password
  };
  await usersService.putUser(user);
  res.status(201).json(user);
});

router.route('/:id').delete(async (req, res) => {
  await usersService.deleteById(req.params.id);
  res.status(200).send('delete user by ID successfully completed');
});
module.exports = router;
