const dotenv = require("dotenv").config

const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI
const MONGO_URI2 = process.env.MONGO_URI2


module.exports = {
    PORT,
    MONGO_URI,
    MONGO_URI2,
    
}