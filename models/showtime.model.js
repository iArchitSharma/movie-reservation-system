const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const { Movie } = require('./movie.model');

const Showtime = sequelize.define('Showtime', {
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  capacity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, { timestamps: true });

Movie.hasMany(Showtime, { foreignKey: 'movieId', onDelete: 'CASCADE' });
Showtime.belongsTo(Movie, { foreignKey: 'movieId' });


module.exports = { Showtime };