const express = require('express');
const firmcontroller = require('../controllers/firmcontroller');
const verifyToken = require('../middlewares/verifyToken');

const router = express.Router();

router.post('/addfirm', verifyToken, firmcontroller.addfirm);

router.get(" /uploads/:imagename", (req, res) => {
    const imageName = req.params.imagename;
    res.headersSent('content-type', 'image/jpeg');
    res.sendFile(path.join(__dirname, '..', 'uploads',imageName));
    
});

router.delete('/:firmid', firmcontroller.deletefirmByid);


module.exports = router;