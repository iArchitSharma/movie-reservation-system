# Movie Reservation System

## Features

* **User Authentication & Authorization**:
    * User registration and login using JSON Web Tokens (JWT).
    * Role-based access control: admin vs. regular user.

* **Movie Management**:
    * Admins can create, update, and delete movies.
    * Each movie has a title, description, genre, and poster image.

* **Showtime Management**:
    * Admins can create, update, and delete showtimes for each movie.
    * Users can browse available showtimes.

* **Reservation Management**:
    * Users can reserve seats for specific showtimes.
    * Users can view and cancel their reservations (only for upcoming showtimes).
    * Admins can view all reservations, seat capacity, and revenue reports.

## Installation and Setup

### Prerequisites
* Node.js installed on your machine.
* PostgreSQL database.

### Steps

1. **Clone the repository**:

    ```bash
    git clone https://github.com/iArchitSharma/movie-reservation-system.git
    cd movie-reservation-system
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Create a `.env` file** with your environment variables:

    ```bash
    touch .env
    ```

    Add the following variables in your .env file:
    ```env
    PORT=3000
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=your_password
    DB_NAME=movie_reservation
    JWT_SECRET=your_jwt_secret
    ```

4. **Create the Database Manually**: Before running the app, you need to create the movie_reservation database manually in PostgreSQL since Sequelize only syncs tables and does not create the database itself.

    * Open your PostgreSQL terminal or a PostgreSQL client and run:
        ```sql
        CREATE DATABASE movie_reservation;
        ```

5. **Sync database schema**: Since migrations are not being used, Sequelize will automatically sync your models to the database tables. Ensure your database is up and running, and run the app:

    ```bash
    npm start
    ```


## Test the API Routes

### Register a new user:
```
POST http://localhost:3000/auth/register
Body: {
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "securepassword",
  "role": "admin"
}
```

### Login:
```
POST http://localhost:3000/auth/login
Body: {
  "email": "johndoe@example.com",
  "password": "securepassword"
}
```

### Get all users:
```
GET http://localhost:3000/users
```

### Create a movie (Admin only):
```
POST http://localhost:3000/movies
Body: {
  "title": "Inception",
  "description": "A mind-bending thriller about dream invasion.",
  "genre": "Sci-Fi",
  "posterImage": "inception.jpg"
}
```

### Get all movies (Admin only):
```
GET http://localhost:3000/movies
```

### Update a movie (Admin only):
```
PUT http://localhost:3000/movies/1
Body: {
  "title": "Inception (update)",
  "description": "A mind-bending thriller about dream invasion.",
  "genre": "Sci-Fi",
  "posterImage": "inception_update.jpg"
}
```

### Delete a movie (Admin only):
```
DELETE http://localhost:3000/movies/1
```

### Create a showtime for a movie (Admin only):
```
POST http://localhost:3000/movies/:movieId/showtimes
Body: {
    date: '2023-10-05',
    time: '19:30',
    capacity: 100
  }
```

### Get showtimes for a movie:
```
GET http://localhost:3000/movies/:movieId/showtimes
```

### Reserve seats for a showtime.

```
POST http://localhost:3000/reservations
Body: {
  "showtimeId": 1,
  "seats": 2
}
```

### Fetch all reservations for the logged-in user

```
GET http://localhost:3000/reservations/my-reservations
```

### Cancel a reservation

```
DELETE http://localhost:3000/reservations/:reservationId:
```

### Fetch all reservations for a specific showtime (Admin only)

```
POST http://localhost:3000/reservations/showtime/:showtimeId:
```

CC: https://roadmap.sh/projects/movie-reservation-system