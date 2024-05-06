const firm = require('../models/Firm');
const Vendor = require('../models/Vendor');
const multer = require('multer');
const Path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' +Path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

const addfirm = async (req, res) => {
    try {
        const { firmname, area, category, offer } = req.body;
        const image = req.file ? req.file.filename : undefined;

        const vendor = await Vendor.findById(req.vendorId);

        if (!vendor) {
            return res.status(404).json({ error: 'Vendor not found' });

        }

        if(vendor.firm.length >= 1){
            return res.status(400).json({ error: 'Firm already exists' });
        }

        const newFirm = new firm({
            firmname,
            area,
            category,
            offer,
            image,
            vendor: vendor._id
        });

        const savedFirm = await newFirm.save();

        const firmid =savedFirm._id

        vendor.firm.push(savedFirm);
        await vendor.save();
        return res.status(201).json({ message: 'Firm added successfully',firmid });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const deletefirmByid = async (req, res) => {
    try {
        const firmid = req.params.firmid;
        const deletedfirm = await firm.findById(firmid);
        if (!deletedfirm) {
            return res.status(404).json({ error: 'Firm not found' });
        }
       
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = { addfirm: [upload.single('image'), addfirm] ,deletefirmByid};
