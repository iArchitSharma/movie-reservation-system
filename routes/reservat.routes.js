// routes/reservat.routes.js
const express = require('express');
const router = express.Router();
const reservatController = require('../controllers/reservat.controller');

router.post('/', reservatController.createReservation);

module.exports = router;