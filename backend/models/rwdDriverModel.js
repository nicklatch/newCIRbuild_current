const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const rwdDriverSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      minLength: 5,
    },
    number: {
      type: String,
      required: true,
      minLength: 1,
      unique: true,
    },
    points: Number,
    hometown: {
      type: String,
      required: true,
      minLength: 4,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { collection: 'rwdDrivers' }
);
rwdDriverSchema.plugin(uniqueValidator);

rwdDriverSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = String(returnedObject._id);
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const RwdDriver = mongoose.model('RwdDriver', rwdDriverSchema);

module.exports = RwdDriver;
