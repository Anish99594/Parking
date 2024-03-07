const express = require('express');
const router = express.Router();
const Slot = require('../models/Slot');
const Parking = require('../models/Parking');

router.get('/', async (req, res) => {
  try {
    const { color, parkingLotId } = req.query;
    const slots = await Slot.find({ color, parkingLotId }).sort({ slotNumber: 1 });
    if (slots.length === 0) {
      return res.status(400).json({ isSuccess: false, error: { reason: `No cars found with color ${color}` } });
    }
    res.status(200).json({ isSuccess: true, response: slots });
  } catch (err) {
    res.status(400).json({ isSuccess: false, error: { reason: err.message } });
  }
});

module.exports = router;