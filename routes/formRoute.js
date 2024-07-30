// routes.js

const express = require('express');
const router = express.Router();
const formController = require('../controller/formController');

// Define routes
router.post('/createform', formController.createForm);
router.get('/getallforms', formController.getformbyid);
router.post('/getformbyid', formController.getform);
module.exports = router;
