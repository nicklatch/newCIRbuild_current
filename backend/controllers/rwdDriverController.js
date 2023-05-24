const rwdRouter = require('express').Router();
const RwdDriver = require('../models/rwdDriverModel');

// @desc Get all Drivers/Points
// @route GET /api/rwdDrivers
// @access Public
rwdRouter.get('/', async (req, res) => {
  const driverData = await RwdDriver.find({});
  driverData ? res.status(200).json(driverData) : res.status(400).end()
});

module.exports = rwdRouter;
