const artistBooking = require("../../models/artistBooking")


const updateEvents = async (req, res, next) => {

    const { id } = req.params
    try {
        const available = await artistBooking.findById({ _id: id })
        if (available) {

            const updatedbookings = await artistBooking.findByIdAndUpdate(id, req.body, { new: true })
            if (updatedbookings) {
                return res.status(200).json({ message: `succussfully updated booking by id ${id}`, bookings: updatedbookings })
            }
            else {
                const error = new Error(`No data found by id: ${id}`);
                error.status = 400;
                throw error;
            }

        }

        else {
            return res.status(400).json({ message: `No booking available by id ${id}` })

        }

    }
    catch (error) {
        return next(error)
    }
}

module.exports = updateEvents;