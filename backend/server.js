// backend/server.js

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB Atlas using environment variable
mongoose.connect(process.env.MONGO_URI, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Failed to connect to MongoDB Atlas', err));

// Define Car Schema and Model
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

// Define Offer Schema and Model
const offerSchema = new mongoose.Schema({
  img: String,
  title: String,
  code: String,
  description: String,
});

const Offer = mongoose.model('Offer', offerSchema);

// Routes for Cars
app.get('/cars', async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (error) {
    console.error('Error fetching cars:', error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});

app.post('/cars', async (req, res) => {
  try {
    const newCar = new Car(req.body);
    await newCar.save();
    res.status(201).json(newCar);
  } catch (error) {
    console.error('Error adding car:', error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});

app.put('/cars/:id', async (req, res) => {
  try {
    const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCar) {
      return res.status(404).json({ message: 'Car not found' });
    }
    res.status(200).json(updatedCar);
  } catch (error) {
    console.error('Error updating car:', error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});

app.delete('/cars/:id', async (req, res) => {
  try {
    const deletedCar = await Car.findByIdAndDelete(req.params.id);
    if (!deletedCar) {
      return res.status(404).json({ message: 'Car not found' });
    }
    res.status(200).json({ message: 'Car deleted successfully' });
  } catch (error) {
    console.error('Error deleting car:', error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});

// Routes for Offers
app.get('/offers', async (req, res) => {
  try {
    const offers = await Offer.find();
    res.status(200).json(offers);
  } catch (error) {
    console.error('Error fetching offers:', error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});

app.post('/offers', async (req, res) => {
  try {
    const newOffer = new Offer(req.body);
    await newOffer.save();
    res.status(201).json(newOffer);
  } catch (error) {
    console.error('Error adding offer:', error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});

app.put('/offers/:id', async (req, res) => {
  try {
    const updatedOffer = await Offer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedOffer) {
      return res.status(404).json({ message: 'Offer not found' });
    }
    res.status(200).json(updatedOffer);
  } catch (error) {
    console.error('Error updating offer:', error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});

app.delete('/offers/:id', async (req, res) => {
  try {
    const deletedOffer = await Offer.findByIdAndDelete(req.params.id);
    if (!deletedOffer) {
      return res.status(404).json({ message: 'Offer not found' });
    }
    res.status(200).json({ message: 'Offer deleted successfully' });
  } catch (error) {
    console.error('Error deleting offer:', error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});

// Serve static files from the 'dist' directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, '../dist')));

// Serve index.html for all routes to support client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Start the server using environment variable for PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
