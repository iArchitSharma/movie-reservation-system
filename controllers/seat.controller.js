
const { Showtime } = require('../models/showtime.model');

exports.reserveSeat = async (req, res) => {
  const { showtimeId, seatPosition } = req.body;
  const { username } = req.user; 
  const [row, column] = seatPosition;

  try {
    const showtime = await Showtime.findByPk(showtimeId);
    if (!showtime) {
      return res.status(404).json({ message: 'Showtime not found' });
    }

    let seats = showtime.seats;
    let reservedUsers = showtime.reservedUsers;

    if (seats[row][column] === 1) {
      return res.status(400).json({ message: 'Seat already reserved' });
    }

    // Reserve the seat
    seats[row][column] = 1;
    reservedUsers[row][column] = username;

    // Update using setDataValue
    showtime.setDataValue('seats', seats);
    showtime.setDataValue('reservedUsers', reservedUsers);
    await showtime.save(); // Save the changes

    res.json({
      message: `Seat reserved by ${username}`,
      seats,
      reservedUsers
    });
  } catch (error) {
    console.error('Error reserving seat:', error);
    res.status(500).json({
      message: 'Error reserving seat',
      error: error.message || error
    });
  }
};
