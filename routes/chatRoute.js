// routes.js

const express = require('express');
const router = express.Router();
const chatController = require('../controller/chatController');

// Define routes
router.post('/createchat', chatController.createChat);
router.post('/getchatbyreciever', chatController.getchatbyid);
module.exports = router;
