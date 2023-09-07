const mongoose = require("mongoose");
const {MONGO_URI} = require("../config/index")
const {MONGO_URI2} = require("../config/index")

const connectDB = async() =>{
    try{
           const conn = await mongoose.connect(MONGO_URI);
           console.log(`Database connected on host ${conn.connection.host}`);

    }
    catch(error){

        console.log(`Error in db connection ${error}`);

    }
}

module.exports = connectDB;