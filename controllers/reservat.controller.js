const { Reservat } = require('../models/reservat.model');

// Create a new reservation
exports.createReservation = async (req, res) => {
  const { userId, movie, time } = req.body;
  const reservation = await Reservat.create({ userId, movie, time });
  res.json({ message: 'Reservation created', reservation });
};