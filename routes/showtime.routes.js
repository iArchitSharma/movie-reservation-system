const express = require('express');
const router = express.Router();
const showtimeController = require('../controllers/showtime.controller');

router.post('/', showtimeController.createShowtime);
router.get('/:movieId', showtimeController.getShowtimesForMovie);

module.exports = router;
