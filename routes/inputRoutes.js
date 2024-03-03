const express = require('express');
const router = express.Router();
const InputController = require('../controllers/inputController');

// Route to create a new input
router.post('/input', InputController.getResults);


module.exports = router;