const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// O erro ocorre se você usar authController.login aqui, mas exportou como fazerLogin
router.post('/login', authController.fazerLogin); 

module.exports = router;