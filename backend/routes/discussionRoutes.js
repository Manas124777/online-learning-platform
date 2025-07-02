const express = require('express');
const router = express.Router();
const { addMessage, getMessages } = require('../controllers/discussionController');

router.post('/', addMessage);
router.get('/:courseId', getMessages);

module.exports = router;
