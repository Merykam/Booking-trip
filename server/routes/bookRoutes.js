const express = require('express');

const router = express.Router();

const bookController = require('../controllers/bookingController');




router.post('/bookingTrip',bookController.booking);
router.get('/getAllBookings',bookController.showBookings);
router.get('/getBooking/:id',bookController.showBookById);
router.get('/getUserBooking',bookController.showUserBooking);
router.get('/getPackageBookings/:id',bookController.showPackageBookings);
router.get('/countBookings',bookController.countBookings);
router.get('/countPrice',bookController.countPrice);







module.exports=router;