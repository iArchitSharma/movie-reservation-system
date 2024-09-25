const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movie.controller');

router.post('/', movieController.createMovie);
router.get('/', movieController.getAllMovies);
router.put('/:id', movieController.updateMovie);
router.delete('/:id', movieController.deleteMovie);

module.exports = router;
