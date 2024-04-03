const express = require('express');
const productcontroller = require('../controllers/productcontroller');

const router = express.Router();

router.post('/addproduct/:firmid', productcontroller.addproduct);
router.get('/:firmid/products', productcontroller.getproductsbyfirm);

router.get(" /uploads/:imagename", (req, res) => {
    const imageName = req.params.imagename;
    res.headersSent('content-type', 'image/jpeg');
    res.sendFile(path.join(__dirname, '..', 'uploads',imageName));
    
});

router.delete('/:productid', productcontroller.deleteproduct);


module.exports = router;