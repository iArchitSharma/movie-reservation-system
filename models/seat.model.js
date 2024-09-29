const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db/db');
const { User } = require('./user.model');

const Seat = sequelize.define('Seat', {
  row: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  col: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.INTEGER, // 0 = available, 1 = reserved
    defaultValue: 0,
  },
  reservedBy: {
    type: DataTypes.STRING, // Stores username who reserved the seat
    allowNull: true,
  },
});

Seat.belongsTo(User, { foreignKey: 'userId' });
sequelize.sync();

module.exports = { Seat, sequelize };
