const express = require('express');
const router = express.Router();
const { enrollUser, getEnrollments } = require('../controllers/enrollmentController');

router.post('/', enrollUser);
router.get('/', getEnrollments);

module.exports = router;
