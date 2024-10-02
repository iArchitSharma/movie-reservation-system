const {Showtime} = require('../models/showtime.model');
const {Movie} = require('../models/movie.model');


exports.createShowtime = async (req, res) => {
  try {
    const { movieId } = req.params;
    const { date, time, capacity } = req.body;
    const movie = await Movie.findByPk(movieId);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    
    const showtime = await Showtime.create({
      movieId,
      date,
      time,
      capacity,
    });
    
    res.status(201).json(showtime);
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Error creating showtime',
      error: error.message || error
    });
  }
};


exports.getShowtimesForMovie = async (req, res) => {
  const { movieId } = req.params;

  try {
    const showtimes = await Showtime.findAll({ where: { movieId } });
    res.status(200).json(showtimes);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error fetching showtimes', error });
  }
};