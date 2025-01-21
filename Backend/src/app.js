const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Import supabase configuration
const supabase = require('./config/supabase');

// Routes
const registrationRoutes = require('./routes/registrationRoutes');
app.use('/registrations', registrationRoutes);

// Set the port directly, or use an environment variable if available
const PORT = process.env.PORT || 45000;  // Using a unique port 45000

// Start the server

module.exports = app;  // Export the configured app
