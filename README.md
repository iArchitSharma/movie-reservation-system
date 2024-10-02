## Test the API Routes

### Register a new user:
```
POST http://localhost:3000/auth/register
Body: {
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "securepassword",
  "role": "admin"  // optional
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

### Create a movie:
```
POST http://localhost:3000/movies
Body: {
  "title": "Inception",
  "description": "A mind-bending thriller about dream invasion.",
  "genre": "Sci-Fi",
  "posterImage": "inception.jpg"
}
```

### Get all movies:
```
GET http://localhost:3000/movies
```

### Update a movie:
```
PUT http://localhost:3000/movies/1
Body: {
  "title": "Inception (update)",
  "description": "A mind-bending thriller about dream invasion.",
  "genre": "Sci-Fi",
  "posterImage": "inception_update.jpg"
}
```

### Delete a movie:
```
DELETE http://localhost:3000/movies/1
```

### Create a showtime for a movie:
```
POST http://localhost:3000/:movieId/showtimes
Body: {
    date: '2023-10-05',
    time: '19:30',
    capacity: 100
  }
```

### Get showtimes for a movie:
```
GET http://localhost:3000/:movieId/showtimes
```

### Seat Reservation

```
POST http://localhost:3000/seats/reserve
Body: {
  "showtimeId": 1,
  "seatPosition": [0, 2]
}
```
