const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservation.controller');
const { verifyToken, isAdmin } = require('../middleware/auth'); 
 
router.post('/', verifyToken, reservationController.createReservation);
router.get('/my-reservations', verifyToken, reservationController.getUserReservations);
router.delete('/:reservationId', verifyToken, reservationController.cancelReservation);

router.get(
    '/showtime/:showtimeId',
    verifyToken,
    isAdmin,
    reservationController.getShowtimeReservations
  );
  
module.exports = router;
