const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const {User} = require('./user.model');
const {Showtime} = require('./showtime.model');

const Reservation = sequelize.define(
  'Reservation',
  {
    seats: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: true }
);

// Reservation belongs to User and Showtime
Reservation.belongsTo(User, { foreignKey: 'userId' });
Reservation.belongsTo(Showtime, { foreignKey: 'showtimeId' });

// User has many reservations
User.hasMany(Reservation, { foreignKey: 'userId' });

// Showtime has many reservations
Showtime.hasMany(Reservation, { foreignKey: 'showtimeId' });

module.exports = { Reservation };