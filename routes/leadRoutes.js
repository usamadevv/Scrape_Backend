// routes.js

const express = require('express');
const router = express.Router();
const leadController = require('../controller/leadController');

// Define routes
router.post('/createleads', leadController.createleads);

router.post('/updateleadstatus', leadController.update);

router.get('/getallleads', leadController.getall);
module.exports = router;
