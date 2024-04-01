const mongoose = require("mongoose");

const firmSchema = new mongoose.Schema({
    firmname: {
        type: String,
        required: true,
        unique: true
    },
    area: {
        type: String,
        required: true
        
    },
    category: {
        type: [
            {
            type: String,
            enum : ['Wholesale', 'Retail' ]
            }
        ]
    },
    offer:{
        type: String,
    },
    image: {
        type: String,
    },
    vendor: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Vendor'
        }

    ],
    product:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Firm'
        }
    ]

});

const Firm = mongoose.model('Firm', firmSchema);
module.exports = Firm;