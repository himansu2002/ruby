
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const vendorRoutes = require("./routes/vendorRoutes")
const bodyParser = require("body-parser");
const firmRoutes = require("./routes/firmRoutes");
const productRoutes = require("./routes/productRoutes");


const app = express()

const PORT = 4000;
dotenv.config();

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("database connected"))
.catch((err)=>console.log(err));

app.use(bodyParser.json());
app.use( '/vendor', vendorRoutes);
app.use('/firm', firmRoutes);
app.use('/product', productRoutes);


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});
app.use('/home',(req,res)=>{
    res.send("<h1>welcome to ruby backend</h1>");
})