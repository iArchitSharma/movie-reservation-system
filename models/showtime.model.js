const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db/db');
const {Movie} = require('./movie.model');

const Showtime = sequelize.define('Showtime', {
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
});

Showtime.belongsTo(Movie); // A showtime belongs to one movie

sequelize.sync();
module.exports = {Showtime, sequelize};

