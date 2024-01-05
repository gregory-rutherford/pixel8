const express = require('express');
const sqlite3 = require('sqlite3').verbose();

// Create Express app
const app = express();

// Create SQLite database connection
const db = new sqlite3.Database('database.db', (err) => {
    if (err) {
        console.error(err.message);
        return;
    }
    console.log('Connected to the SQLite database.');
});

// Define routes and middleware here

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
