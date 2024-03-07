const mongoose = require('mongoose');

const parkingSchema = new mongoose.Schema({
  parkingLotId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ParkingLot',
    required: true,
  },
  registrationNumber: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
    enum: ['RED', 'GREEN', 'BLUE', 'BLACK', 'WHITE', 'YELLOW', 'ORANGE'],
  },
  slotNumber: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['PARKED', 'LEFT'],
  },
});

const Parking = mongoose.model('Parking', parkingSchema);

module.exports = Parking;