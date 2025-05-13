const Room = require('./models/rooms');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();


app.use(cors());
app.use(express.json());






app.get('/api/availability', async (req, res) => {
    const { checkin, checkout} =req.query;
    console.log('API HIT:', checkin, checkout);
  

  if (!checkin || !checkout) {
    return res.status(400).json({ error: 'Missing check-in or check-out date' });
  }

  try {
    const availableRooms = await Room.find();
    res.json({
      checkin,
      checkout,
      availableRooms
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch rooms' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});