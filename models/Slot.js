const mongoose = require('mongoose');

const slotSchema = new mongoose.Schema({
  parkingLotId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ParkingLot',
    required: true,
  },
  slotNumber: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
    enum: ['RED', 'GREEN', 'BLUE', 'BLACK', 'WHITE', 'YELLOW', 'ORANGE'],
  },
});

const Slot = mongoose.model('Slot', slotSchema);

module.exports = Slot;