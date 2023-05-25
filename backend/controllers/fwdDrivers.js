const fwdDriverRouter = require('express').Router();
const FwdDriver = require('../models/fwdDriverModel');

fwdDriverRouter.get('/', async (req, res) => {
  const fwdDrivers = await FwdDriver.find({});
  res.json(fwdDrivers);
});
module.exports = fwdDriverRouter;
