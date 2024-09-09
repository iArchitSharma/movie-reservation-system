const { Movie } = require('../models/movie.model');

// Create a new movie
exports.createMovie = async (req, res) => {
  const { title, showtime } = req.body;
  const movie = await Movie.create({ title, showtime });
  res.json({ message: 'Movie created', movie });
};

// Get all movies
exports.getMovies = async (req, res) => {
  const movies = await Movie.findAll();
  res.json(movies);
};

// Delete a movie
exports.deleteMovie = async (req, res) => {
  const { movieId } = req.params;
  const movie = await Movie.findByPk(movieId);

  if (!movie) {
    return res.status(404).json({ message: 'Movie not found' });
  }

  await movie.destroy();
  res.json({ message: 'Movie deleted' });
};