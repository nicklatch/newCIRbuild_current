const rwdDriverRouter = require('express').Router();
const RwdDriver = require('../models/rwdDriverModel');

rwdDriverRouter.get('/', async (req, res) => {
  const rwdDrivers = await RwdDriver.find({});
  res.json(rwdDrivers);
});

module.exports = rwdDriverRouter;
