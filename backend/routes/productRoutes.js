const express = require('express');
const productcontroller = require('../controllers/productcontroller');

const router = express.Router();

router.post('/addproduct/:firmid', productcontroller.addproduct);


module.exports = router;