const fwdRouter = require('express').Router();
const FwdDriver = require('../models/fwdDriverModel');

// @desc Get all Drivers/Points
// @route GET /api/FwdDrivers
// @access Public
fwdRouter.get('/', async (req, res) => {
  const driverData = await FwdDriver.find({});
  driverData ? res.status(200).json(driverData) : res.status(400).end()
});

module.exports = fwdRouter;