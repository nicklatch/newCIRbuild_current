const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const fwdDriverSchema = new mongoose.Schema(
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
  },
  { collection: 'fwdDrivers' }
);
fwdDriverSchema.plugin(uniqueValidator);

fwdDriverSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = String(returnedObject._id);
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const FwdDriver = mongoose.model('FwdDriver', fwdDriverSchema);

module.exports = FwdDriver;
