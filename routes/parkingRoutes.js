const express = require('express');
const router = express.Router();
const Parking = require('../models/Parking');
const ParkingLot = require('../models/ParkingLot');
const findAvailableSlot = require('../utils/Slot');

router.post('/', async (req, res) => {
  try {
    const { parkingLotId, registrationNumber, color } = req.body;
    const parkingLot = await ParkingLot.findById(parkingLotId);
    if (!parkingLot || !parkingLot.isActive) {
      return res.status(400).json({ isSuccess: false, error: { reason: 'Invalid parking lot ID' } });
    }
    // Assuming you have a function to find available slot number
    const slotNumber = await findAvailableSlot(parkingLotId, color);
    if (slotNumber === -1) {
      return res.status(400).json({ isSuccess: false, error: { reason: 'No available slots for this color' } });
    }
    const parking = new Parking({ parkingLotId, registrationNumber, color, slotNumber, status: 'PARKED' });
    await parking.save();
    res.status(201).json({ isSuccess: true, response: parking });
  } catch (err) {
    res.status(400).json({ isSuccess: false, error: { reason: err.message } });
  }
});

router.delete('/', async (req, res) => {
  try {
    const { parkingLotId, registrationNumber, color } = req.body;
    const parking = await Parking.findOne({ parkingLotId, registrationNumber, color, status: 'PARKED' });
    if (!parking) {
      return res.status(400).json({ isSuccess: false, error: { reason: 'Car not found in parking lot' } });
    }
    parking.status = 'LEFT';
    await parking.save();
    res.status(200).json({ isSuccess: true, response: parking });
  } catch (err) {
    res.status(400).json({ isSuccess: false, error: { reason: err.message } });
  }
});

module.exports = router;