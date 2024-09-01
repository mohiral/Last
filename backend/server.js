import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';


import tableRoutes from './routes/tableRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Use routes
app.use('/', tableRoutes);

// Connect to MongoDB using the URI from environment variables
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB', err));

// Define Schemas and Models
const dataSchema = new mongoose.Schema({
    time: String,
    name: String,
    result: String,
});

const Data = mongoose.model('Data', dataSchema);

const dataSchemaA = new mongoose.Schema({
    time: String,
    name: String,
    result1: String,
    result2: String,
});

const DataA = mongoose.model('DataA', dataSchemaA);

const dataThirdSchema = new mongoose.Schema({
    name: String,
    place: String,
});

const DataThird = mongoose.model('DataThird', dataThirdSchema);

// Dynamic Table Model Creation
const getTableModel = (tableName) => {
    const tableSchema = new mongoose.Schema({
        name: String,
        today: String,
        yesterday: String,
    });

    // Ensure the model is created or retrieved correctly
    return mongoose.models[tableName] || mongoose.model(tableName, tableSchema, tableName);
};

// Get Table Names from MongoDB
const getTableNames = async () => {
    try {
        const collections = await mongoose.connection.db.listCollections().toArray();
        return collections.map(collection => collection.name);
    } catch (error) {
        console.error('Error fetching table names:', error);
        throw new Error('Failed to fetch table names.');
    }
};

// Validate Table Data Middleware
const validateTableData = (req, res, next) => {
    const { name, today, yesterday } = req.body;
    if (!name || !today || !yesterday) {
        return res.status(400).json({ message: 'Missing required fields' });
    }
    next();
};

// Routes for the Data model
app.get('/getData', async (req, res) => {
    try {
        const data = await Data.find();
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

app.post('/addData', async (req, res) => {
    const { time, name, result } = req.body;
    if (!time || !name || !result) {
        return res.status(400).json({ message: 'Missing required fields' });
    }
    try {
        const newData = new Data({ time, name, result });
        await newData.save();
        res.status(201).json(newData);
    } catch (error) {
        console.error('Error adding data:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

app.delete('/deleteData/:id', async (req, res) => {
    try {
        const result = await Data.findByIdAndDelete(req.params.id);
        if (!result) {
            return res.status(404).json({ message: 'Data not found' });
        }
        res.status(200).json({ message: 'Data deleted successfully' });
    } catch (error) {
        console.error('Error deleting data:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

app.put('/updateData/:id', async (req, res) => {
    const { time, name, result } = req.body;
    if (!time || !name || !result) {
        return res.status(400).json({ message: 'Missing required fields' });
    }
    try {
        const updatedData = await Data.findByIdAndUpdate(
            req.params.id,
            { time, name, result },
            { new: true }
        );
        if (!updatedData) {
            return res.status(404).json({ message: 'Data not found' });
        }
        res.status(200).json(updatedData);
    } catch (error) {
        console.error('Error updating data:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

// Routes for the DataThird model
app.get('/getDataThird', async (req, res) => {
    try {
        const entries = await DataThird.find();
        res.status(200).json(entries);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

app.post('/addDataThird', async (req, res) => {
    const { name, place } = req.body;
    if (!name || !place) {
        return res.status(400).json({ message: 'Missing required fields' });
    }
    try {
        const newEntry = new DataThird({ name, place });
        await newEntry.save();
        res.status(201).json(newEntry);
    } catch (error) {
        console.error('Error adding data:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

app.delete('/deleteDataThird/:id', async (req, res) => {
    try {
        const result = await DataThird.findByIdAndDelete(req.params.id);
        if (!result) {
            return res.status(404).json({ message: 'Data not found' });
        }
        res.status(200).json({ message: 'Data deleted successfully' });
    } catch (error) {
        console.error('Error deleting data:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

app.put('/updateDataThird/:id', async (req, res) => {
    const { name, place } = req.body;
    if (!name || !place) {
        return res.status(400).json({ message: 'Missing required fields' });
    }
    try {
        const updatedData = await DataThird.findByIdAndUpdate(
            req.params.id,
            { name, place },
            { new: true }
        );
        if (!updatedData) {
            return res.status(404).json({ message: 'Data not found' });
        }
        res.status(200).json(updatedData);
    } catch (error) {
        console.error('Error updating data:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

// Routes for the DataA model
app.get('/getDataa', async (req, res) => {
    try {
        const data = await DataA.find();
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

app.post('/addDataa', async (req, res) => {
    try {
        const { time, name, result1, result2 } = req.body;

        if (!time || !name || !result1 || !result2) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const newData = new DataA({ time, name, result1, result2 });
        await newData.save();
        res.status(201).json(newData);
    } catch (error) {
        console.error('Error saving data:', error.message); // Log the error message
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.delete('/deleteDataa/:id', async (req, res) => {
    try {
        const result = await DataA.findByIdAndDelete(req.params.id);
        if (!result) {
            return res.status(404).json({ message: 'Data not found' });
        }
        res.status(200).json({ message: 'Data deleted successfully' });
    } catch (error) {
        console.error('Error deleting data:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

app.put('/updateDataa/:id', async (req, res) => {
    const { time, name, result1, result2 } = req.body;

    if (!time || !name || !result1 || !result2) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const updatedData = await DataA.findByIdAndUpdate(
            req.params.id,
            { time, name, result1, result2 },
            { new: true }
        );

        if (!updatedData) {
            return res.status(404).json({ error: 'Data not found' });
        }

        res.status(200).json(updatedData);
    } catch (error) {
        console.error('Error updating data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Dynamic routes for any table based on the table name
app.get('/:tableName', async (req, res) => {
    try {
        const { tableName } = req.params;
        const Model = getTableModel(tableName);
        const data = await Model.find();
        res.status(200).json(data);
    } catch (error) {
        console.error(`Error fetching data from ${req.params.tableName}:`, error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

app.post('/:tableName', validateTableData, async (req, res) => {
    try {
        const { tableName } = req.params;
        const { name, today, yesterday } = req.body;

        const Model = getTableModel(tableName);
        const newData = new Model({ name, today, yesterday });

        await newData.save();
        res.status(201).json(newData);
    } catch (error) {
        console.error(`Error adding data to ${req.params.tableName}:`, error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

app.delete('/:tableName/:id', async (req, res) => {
    try {
        const { tableName } = req.params;
        const Model = getTableModel(tableName);
        const result = await Model.findByIdAndDelete(req.params.id);
        if (!result) {
            return res.status(404).json({ message: 'Data not found' });
        }
        res.status(200).json({ message: 'Data deleted successfully' });
    } catch (error) {
        console.error(`Error deleting data from ${req.params.tableName}:`, error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

app.put('/:tableName/:id', validateTableData, async (req, res) => {
    try {
        const { tableName } = req.params;
        const { name, today, yesterday } = req.body;

        const Model = getTableModel(tableName);
        const updatedData = await Model.findByIdAndUpdate(
            req.params.id,
            { name, today, yesterday },
            { new: true }
        );

        if (!updatedData) {
            return res.status(404).json({ message: 'Data not found' });
        }
        res.status(200).json(updatedData);
    } catch (error) {
        console.error(`Error updating data in ${req.params.tableName}:`, error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
