const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'db/reservat.sqlite'
});

const Reservat = sequelize.define('Reservant', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
  movie: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  time: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

sequelize.sync();
module.exports = { Reservat };