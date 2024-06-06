const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Enable CORS for all routes
app.use(cors());

app.get('/data', (req, res) => {
    // Read sample.json file
    fs.readFile('sample.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        // Parse JSON data and send response
        const jsonData = JSON.parse(data);
        res.json(jsonData);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
