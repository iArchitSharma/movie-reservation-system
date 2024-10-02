const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movie.controller');
const showtimeController = require('../controllers/showtime.controller');
const { verifyToken, isAdmin } = require('../middleware/auth');

// Movie routes
router.post('/', verifyToken, isAdmin, movieController.createMovie);
router.get('/', movieController.getAllMovies);
router.put('/:movieId', verifyToken, isAdmin, movieController.updateMovie);
router.delete('/:movieId', verifyToken, isAdmin, movieController.deleteMovie);

// Showtime routes
router.post('/:movieId/showtimes', verifyToken, isAdmin, showtimeController.createShowtime);
router.get('/:movieId/showtimes', showtimeController.getShowtimesForMovie);

module.exports = router;
