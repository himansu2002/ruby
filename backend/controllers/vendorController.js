

const Vendor = require('../models/Vendor');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const dotenv=require('dotenv');

dotenv.config();

const secretKey=process.env.whatisyourname;





const vendorRegister = async (req, res) => {

    const { username, email, password } = req.body;
    try{
        const vendorEmail = await Vendor.findOne({email});  
        if(vendorEmail){
            return res.status(400).json({msg: "Email already exists"});
        }
        const hashpassword = await bcrypt.hash(password, 10);
        const newVendor = new Vendor({
            username,
            email,
            password: hashpassword
        });
        await newVendor.save();
        res.status(201).json({msg: "Vendor Registration Successfull"});
        console.log("Vendor Registration Successfull");
    

    }
    catch(error){
        console.error(error);
        req.status(500).json({error: "internal error"})
    }
}

const vendorlogin = async (req, res) => {

    const { email, password } = req.body;

    try{
       const vendor= await Vendor.findOne({email});

       if(!vendor || !(await bcrypt.compare(password, vendor.password))){
           return res.status(401).json({msg: "invalid enail or password"});
    }

    const token = jwt.sign({vendorid: vendor._id},secretKey, {expiresIn: '1h'} )
    res.status(200).json({msg: "Login Successfull", token});
    console.log("Login Successfull",token);
}
catch(error){
    console.error(error);
    req.status(500).json({error: "internal error"})
}
}

module.exports = { vendorRegister, vendorlogin };
