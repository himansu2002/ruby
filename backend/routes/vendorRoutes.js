
const vendorcontroller = require('../controllers/vendorController');
const express = require('express');

const router = express.Router();

router.post('/register', vendorcontroller.vendorRegister);
router.post('/login', vendorcontroller.vendorlogin);

module.exports = router;