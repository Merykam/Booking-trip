const express = require('express');

const router = express.Router();

const HotelController = require('../controllers/hotelController');



router.get('/getAllHotels',HotelController.getAllHotels);
router.post('/addHotel',HotelController.addHotel);
router.delete('/deleteHotel/:id',HotelController.deleteHotel);



module.exports=router;