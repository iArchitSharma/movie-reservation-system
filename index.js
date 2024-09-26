const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

// Import routes
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const movieRoutes = require('./routes/movie.routes');
const showtimeRoutes = require('./routes/showtime.routes');


// Use routes
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/movies', movieRoutes);
app.use('/showtimes', showtimeRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});