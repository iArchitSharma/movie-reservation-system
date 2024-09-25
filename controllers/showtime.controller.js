const {Showtime} = require('../models/showtime.model');
const {Movie} = require('../models/movie.model');

// Create a new showtime
exports.createShowtime = async (req, res) => {
  try {
    const { movieId, date, time } = req.body;
    const movie = await Movie.findByPk(movieId);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    const showtime = await Showtime.create({ date, time, MovieId: movie.id });
    res.json({ message: 'Showtime created', showtime });
  } catch (error) {
    console.error('Error creating showtime:', error);
    res.status(500).json({
        message: 'Error creating showtime',
        error: error.message || error
    });
  }
};

// Get all showtimes for a movie
exports.getShowtimesForMovie = async (req, res) => {
  try {
    const { movieId } = req.params;
    const showtimes = await Showtime.findAll({ where: { MovieId: movieId } });
    res.json(showtimes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching showtimes', error });
  }
};