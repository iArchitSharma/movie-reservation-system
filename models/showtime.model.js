const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db/db');
const { Movie } = require('./movie.model');

const Showtime = sequelize.define('Showtime', {
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  seats: {
    type: DataTypes.JSON,  // Store the 2D array for seats
    defaultValue: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0]],  // Default to 10 seats (5x2)
  },
  reservedUsers: {
    type: DataTypes.JSON,  // Store the usernames array
    defaultValue: [['*', '*', '*', '*', '*'], ['*', '*', '*', '*', '*']],
  },
});

Showtime.belongsTo(Movie); // A showtime belongs to one movie

sequelize.sync();
module.exports = { Showtime, sequelize };