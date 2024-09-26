const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const Movie = sequelize.define('Movie', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
});

sequelize.sync();
module.exports = {Movie, sequelize};