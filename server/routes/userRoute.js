const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');



router.get('/getAllUsers',userController.getAllusers);
router.get('/updateStatus/:id',userController.updateUserStatus);
router.get('/countUsers',userController.countUsers);



module.exports=router;