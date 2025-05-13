const mongoose = require('mongoose');
const Room = require('./models/rooms');

mongoose.connect('mongodb://127.0.0.1:27017/mountain_view', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ Connected to MongoDB');
}).catch((err) => {
  console.error('Connection error:', err);
});

const seedRooms = [
  {
    name: 'Deluxe Room',
    price: 1299,
    description: 'Garden view with modern amenities.',
    image: 'rmr-deluxe.webp'
  },
  {
    name: 'Super Deluxe Room',
    price: 2199,
    description: 'Mountain view with balcony.',
    image: 'rmr-super-deluxe.webp'
  },
  {
    name: 'Family Retreat',
    price: 2999,
    description: 'Spacious suite perfect for families.',
    image: 'rmr-family.webp'
  }
];

Room.insertMany(seedRooms)
  .then(() => {
    console.log('🌱 Sample rooms inserted!');
    mongoose.disconnect();
  })
  .catch(err => {
    console.error('Insert error:', err);
  });