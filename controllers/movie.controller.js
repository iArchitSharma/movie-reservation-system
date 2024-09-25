const { Movie } = require('../models/movie.model');

// Create a new movie
exports.createMovie = async (req, res) => {
  try {
    const { title, description, duration } = req.body;
    const movie = await Movie.create({ title, description, duration });
    res.json({ message: 'Movie created', movie });
  } catch (error) {
    res.status(500).json({ message: 'Error creating movie', error });
  }
};

// Get all movies
exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.findAll();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching movies', error });
  }
};

// Update a movie
exports.updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, duration } = req.body;
    const movie = await Movie.findByPk(id);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    await movie.update({ title, description, duration });
    res.json({ message: 'Movie updated', movie });
  } catch (error) {
    res.status(500).json({ message: 'Error updating movie', error });
  }
};

// Delete a movie
exports.deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findByPk(id);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    await movie.destroy();
    res.json({ message: 'Movie deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting movie', error });
  }
};