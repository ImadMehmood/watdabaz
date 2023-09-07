const ArtistBooking = require("../../models/artistBooking")
 
const getEvents = async(req,res,next) =>{
    try{

        const bookings = await ArtistBooking.find({})
        if (bookings){
            return res.status(200).json({bookings})
        }
        else {
            const error = new Error("No bookings found data found");
            error.status = 400;
            throw error;
        }

    }
    catch(error){
        return next(error)
    }
}

module.exports = getEvents
