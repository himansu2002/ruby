const express = require('express');
const firmcontroller = require('../controllers/firmcontroller');
const verifyToken = require('../middlewares/verifyToken');

const router = express.Router();

router.post('/addfirm', verifyToken, firmcontroller.addfirm);


module.exports = router;