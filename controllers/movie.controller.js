const { Movie } = require('../models/movie.model');


exports.createMovie = async (req, res) => {
  try {
    const { title, description, genre, posterImage } = req.body;
    const movie = await Movie.create({ title, description, genre, posterImage });
    res.status(201).json({ message: 'Movie created', movie });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error creating movie', error });
  }
};

// Get all movies
exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.findAll();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching movies', error });
  }
};


exports.updateMovie = async (req, res) => {
  try {
    const { movieId } = req.params;
    const { title, description, genre, posterImage } = req.body;
    const movie = await Movie.findByPk(movieId);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    await movie.update({ title, description, genre, posterImage });
    res.status(200).json({ message: 'Movie updated', movie });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error updating movie', error });
  }
};

exports.deleteMovie = async (req, res) => {
  try {
    const { movieId } = req.params;
    const movie = await Movie.findByPk(movieId);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    await movie.destroy();
    res.json({ message: 'Movie deleted' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error deleting movie', error });
  }
};