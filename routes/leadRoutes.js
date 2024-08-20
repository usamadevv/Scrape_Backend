// routes.js

const express = require('express');
const router = express.Router();
const leadController = require('../controller/leadController');

// Define routes
router.post('/createleads', leadController.createleads);

router.post('/updateleadstatus', leadController.update);

router.post('/getallleads', leadController.getall);

router.get('/getcount', leadController.getcount);
module.exports = router;
