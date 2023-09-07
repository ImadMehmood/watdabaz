const venueBooking = require("../../models/venueBooking")

const getEvents = async(req,res,next) => {
  
    try{
        const bookings = await venueBooking.find({})
        if(bookings) {
            return res.status(200).json({bookings})
        }
        else {
            const error = new Error("No bookings found data found");
            error.status = 400;
            throw error;
        }

    }
    catch(error){
        next(error)
    }
}

module.exports = getEvents