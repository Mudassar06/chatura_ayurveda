const express = require('express');
const path = require('path');
const router = express.Router();

// Route for the coming soon page
router.use('/', express.static(path.join(__dirname, 'public', 'coming_soon')));

// Route for the service catalogue page
router.use('/coming_soon', express.static(path.join(__dirname, 'public', 'coming_soon')));

// Route for the service catalogue page
router.use('/our_services', express.static(path.join(__dirname, 'public', 'service_catalogue')));


module.exports = router;
