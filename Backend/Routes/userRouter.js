const express = require('express');
const userControllers = require('../controllers/userControllers');
const router = express.Router();


router.post('/signup', userControllers.signUp);
router.post('/login', userControllers.LogIn);
router.post('/user', userControllers.user);


module.exports = router;
