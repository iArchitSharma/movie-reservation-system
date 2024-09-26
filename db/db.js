const { Sequelize } = require('sequelize');

// Create a single Sequelize instance
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'db/movie.sqlite'  
});

module.exports = sequelize;