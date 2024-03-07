const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const parkingLotRoutes = require('./routes/parkingLotRoutes');
const parkingRoutes = require('./routes/parkingRoutes');
const slotRoutes = require('./routes/slotRoutes');
const { Console } = require('console');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://anishgajbhare2000:anish@cluster0.a2zkbj6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
}).then(()=>{console.log("database Conneted")});

app.use('/api/ParkingLots', parkingLotRoutes);
app.use('/api/Parkings', parkingRoutes);
app.use('/api/Slots', slotRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});