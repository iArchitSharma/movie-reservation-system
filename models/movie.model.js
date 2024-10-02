const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const Movie = sequelize.define('Movie', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    posterImage: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
},
{ timestamps: true });

module.exports = {Movie};