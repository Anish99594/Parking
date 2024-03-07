
const findAvailableSlot = async (parkingLotId, color) => {
  try {
    const occupiedSlots = await Slot.find({ parkingLotId, color, isOccupied: false });
    const allSlots = await Slot.find({ parkingLotId, color });
    const occupiedSlotNumbers = occupiedSlots.map(slot => slot.slotNumber);
    const allSlotNumbers = allSlots.map(slot => slot.slotNumber);

    for (let i = 1; i <= allSlotNumbers.length; i++) {
      if (!occupiedSlotNumbers.includes(i)) {
        return i;
      }
    }

    return -1;
  } catch (error) {
    console.error('Error finding available slot:', error);
    throw new Error('Error finding available slot');
  }
};

module.exports = findAvailableSlot;