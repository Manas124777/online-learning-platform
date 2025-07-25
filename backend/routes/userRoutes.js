const express = require('express');
const router = express.Router();
const { register, login, logout, getProfile } = require('../controllers/userController');

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/profile', getProfile);

module.exports = router;
