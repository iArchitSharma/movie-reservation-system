
const express = require('express');
const router = express.Router();
const seatController = require('../controllers/seat.controller');
const authenticate = require('../middleware/auth'); 

router.post('/reserve', authenticate, seatController.reserveSeat); 

module.exports = router;
