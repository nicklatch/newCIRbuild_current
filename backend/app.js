require('dotenv').config;
require('express-async-errors');
const express = require('express');
const app = express();
const cors = require('cors');
const config = require('./utils/config');
const middleware = require('./utils/middleware');
const logger = require('./utils/logger');
const mongoose = require('mongoose');
const morgan = require('morgan');
const rwdRouter = require('./controllers/rwdDriverController');
const fwdRouter = require('./controllers/fwdDriverController');

mongoose.set('strictQuery', false);

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info('Connected to MongoDB');
  })
  .catch((error) => {
    logger.error(`Error connecting to MongoDB: ${error.message}`);
  });

app.use(cors());
app.use(express.static('dist'));
app.use(express.json());
app.use(morgan('tiny'));
app.use('/api/rwdDrivers', rwdRouter);
app.use('/api/fwdDrivers', fwdRouter);
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
