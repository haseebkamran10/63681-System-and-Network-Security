const express = require('express');
const router = express.Router();
const { register, getRegistrations } = require('../controllers/registrationController');


// Route to register a new user
router.post('/', register);

// Route to get all registrations
router.get('/', getRegistrations);

module.exports = router;
