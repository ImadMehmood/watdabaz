const mongoose = require("mongoose");
const { Schema } = mongoose;

const citySchema = new Schema({
    CityName:{
        
        type: String
    }
    
});

const metrohubSchema = new Schema({
    MetrohubName: {
        type: String
    },
    City: [citySchema]
});

const regionSchema = new Schema({
    Region: {
        type: String
    },
    Metrohub: [metrohubSchema]
});

module.exports = mongoose.model("Region", regionSchema, "regions");
