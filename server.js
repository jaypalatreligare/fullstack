// Import express
require('dotenv').config();
const dbPassword = process.env.DB_PASSWORD;
const express = require('express');
const cors = require('cors');
const app = express();
const corsOptions = {
  origin: 'http://localhost:3001', // Allow only this origin
  methods: ['GET', 'POST'], // Allow only certain HTTP methods
};

app.use(cors(corsOptions));
// Define a simple array of user data
const users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Alice Johnson", email: "alice@example.com" }
];

// Define a route to return all users
app.get('/users', (req, res) => {
    res.json(users); // Send the user data as a JSON response
});

// Define a route to return a specific user by id
app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id); // Get user ID from the request parameters
    const user = users.find(u => u.id === userId); // Find the user by ID

    if (user) {
        res.json(user); // If the user is found, send the user data
    } else {
        res.status(404).json({ message: "User not found" }); // Return 404 if not found
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
