const mongoose = require("mongoose");

const connectdb = () =>{
    try {mongoose.connect(process.env.MONGODB_URI)
        console.log("Database Connected");
        
    } catch (err) {
        console.log("Unabkle to connect db");
    }
};

module.exports = connectdb;