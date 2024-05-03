const express = require('express');
const router = express.Router();
const userApiController =require('../controllers/api/userController')

router.get('/user/register', userApiController.registerUser);
router.get('/user/login', userApiController.loginUser);
router.get('/user/destroy', userApiController.destoryUser);

router.get('/user/view', userApiController.viewUser);
router.get('/user/store', userApiController.storeUser);
router.get('/user/update/:id', userApiController.updateUser);


module.exports =router;     