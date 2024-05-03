const express = require('express');
const router = express.Router();
const userController =require('../controllers/userController')

router.get('/user/view', userController.indexFunction);

module.exports = router;  
   

