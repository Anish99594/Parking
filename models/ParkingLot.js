const mongoose = require('mongoose');

const parkingLotSchema = new mongoose.Schema({
  capacity: {
    type: Number,
    required: true,
    validate: {
      validator: (value) => value >= 0 && value <= 2000,
      message: 'Capacity must be between 0 and 2000',
    },
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

const ParkingLot = mongoose.model('ParkingLot', parkingLotSchema);

module.exports = ParkingLot;