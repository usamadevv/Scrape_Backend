// routes.js

const express = require('express');
const router = express.Router();
const formResponseController = require('../controller/formResponseController');

// Define routes
router.post('/createformresponse', formResponseController.createformRsponse);
router.post('/getformresbyid', formResponseController.getformRsponsebyid);
module.exports = router;
