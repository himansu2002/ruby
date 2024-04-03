const Product = require('../models/Product');
const Firm = require('../models/Firm');
const multer = require('multer');
const Path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + Path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

const addproduct = async (req, res) => {
    try {
        const { productname, price, category, description } = req.body;
        const image = req.file ? req.file.filename : undefined;

        const firmid = req.params.firmid;
        const firm = await Firm.findById(firmid);

        if (!firm) {
            return res.status(404).json({ error: 'Firm not found' });
        }

        const newProduct = new Product({
            productname,
            price,
            category,
            image,
            description,
            firm: firm._id
        });
        const savedProduct = await newProduct.save();

        firm.product.push(savedProduct);
        await firm.save();

        return res.status(201).json({ message: 'Product added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const getproductsbyfirm = async (req, res) => {
    try {
        const firmid = req.params.firmid;
        const firm = await Firm.findById(firmid);
        if (!firm) {
            return res.status(404).json({ error: 'Firm not found' });
        }
        const products = await Product.find({ firm: firmid });
        res.status(200).json({ products: firm.product });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const deleteproduct = async (req, res) => {
    try {
        const productid = req.params.productid;
        const deletedproduct = await Product.findById(productid);
        if (!deletedproduct) {
            return res.status(404).json({ error: 'Product not found' });
        }
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = { addproduct: [upload.single('image'), addproduct],getproductsbyfirm,deleteproduct };
