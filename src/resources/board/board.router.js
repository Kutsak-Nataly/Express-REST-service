const router = require('express').Router();
// const Border = require('./board.model');
const bordersService = require('./board.service');

router.route('/').get(async (req, res) => {
  const borders = await bordersService.getAll();
  res.send(borders);
});

module.exports = router;
