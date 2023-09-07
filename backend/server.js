const express = require("express");
const app = express();
require("dotenv").config();
const {PORT} = require("./config/index")
const connectDB = require("./database/index")
const venueRoutes = require("./routes/venueRoutes")
const artistRoutes = require("./routes/artistRoutes")
const bookingRoutes = require("./routes/bookingRoutesVenue")
const bookingRoutesArtist = require("./routes/bookingRoutesArtist")
const regionRoutes = require("./routes/regionRoutes")
const bodyParser = require("body-parser")
const cors = require("cors");
const cookieParser = require("cookie-parser")
const errorhandler = require("./middlewares/errorHandler");


app.use(cookieParser())
app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000', 'http://localhost:4000']
}))

app.use("/uploads", express.static("uploads")); 


app.use(bodyParser.json()); 
app.use("/venue",venueRoutes )
app.use("/artist",artistRoutes)
app.use("/booking", bookingRoutes)
app.use("/bookingArtist" , bookingRoutesArtist ) 
app.use("/regions", regionRoutes)



app.use(errorhandler)
// ensuring that database connects first then our server
;(async () =>{
    await connectDB();
    app.listen(PORT, () =>{
        console.log(`Server is connected on port ${PORT}`);
    })

})();





