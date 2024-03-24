const express = require('express');

const router = express.Router();

const cityController = require('../controllers/cityController');



router.get('/getAllCities',cityController.getAllCities);
router.post('/addCity',cityController.addCity);
router.delete('/deleteCity/:id',cityController.deleteCity);




module.exports=router;