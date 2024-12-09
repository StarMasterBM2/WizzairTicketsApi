const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.send('Welcome to My API!');
});

// Example GET endpoint
app.get('/api/data', (req, res) => {
    const data = {
        message: 'Hello, World!',
        timestamp: new Date(),
    };
    res.json(data);
});

// Example POST endpoint
app.post('/api/data', (req, res) => {
    const receivedData = req.body;
    res.json({
        message: 'Data received successfully!',
        receivedData,
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
