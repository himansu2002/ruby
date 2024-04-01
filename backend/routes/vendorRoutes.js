
const vendorcontroller = require('../controllers/vendorController');
const express = require('express');

const router = express.Router();

router.post('/register', vendorcontroller.vendorRegister);
router.post('/login', vendorcontroller.vendorlogin);
router.get('/allvendors', vendorcontroller.getAllVendors);
router.get('/vendorbyid/:id', vendorcontroller.getvendorbyid);



module.exports = router;