const express = require('express');
const router = express.Router();
const ParkingLot = require('../models/ParkingLot');

router.post('/', async (req, res) => {
  try {
    const { capacity } = req.body;
    const parkingLot = new ParkingLot({ capacity });
    await parkingLot.save();
    res.status(201).json({ isSuccess: true, response: parkingLot });
  } catch (err) {
    res.status(400).json({ isSuccess: false, error: { reason: err.message } });
  }
});

module.exports = router;