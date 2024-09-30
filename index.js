const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./models/db');

dotenv.config();

const app = express();
app.use(express.json());

// Import routes
const authRoutes = require('./routes/auth.routes');


// Use routes
app.use('/auth', authRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  try {
    await sequelize.authenticate();
    await sequelize.sync();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});