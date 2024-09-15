// backend/models/car.js

import mongoose from 'mongoose';

const carSchema = new mongoose.Schema({
  name: String,
  price: {
    120: Number,
    300: Number,
    unlimited: Number,
  },
  kms: {
    120: Number,
    300: Number,
  },
  type: String,
  fuel: String,
  capacity: String,
  imgUrl: String,
});

const Car = mongoose.model('Car', carSchema);

export default Car;
