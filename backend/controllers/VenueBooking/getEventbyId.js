const venueBooking = require("../../models/venueBooking")

const getEventbyVenueID = async (req, res, next) => {
     console.log("running");
    const { id } = req.params
    try {

        const bookings = await venueBooking.find({venue: id })
        if (bookings) {

          return res.status(200).json(bookings)
        }

        else {
            return res.status(400).json({ message: `No booking available by id ${id}` })

        }

    }
    catch (error) {
        return next(error)
    }
}

module.exports = getEventbyVenueID 