const firm = require('../models/Firm');
const Vendor = require('../models/Vendor');
const multer = require('multer');

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

        const newFirm = new firm({
            firmname,
            area,
            category,
            offer,
            image,
            vendor: vendor._id
        });

        const savedFirm = await newFirm.save();

        vendor.firm.push(savedFirm);
        await vendor.save();
        return res.status(201).json({ message: 'Firm added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { addfirm: [upload.single('image'), addfirm] };
