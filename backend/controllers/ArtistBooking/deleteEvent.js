const artistBooking = require("../../models/artistBooking")

const deleteBooking = async (req, res, next) => {
    const { id } = req.params
    try {
        const available = await artistBooking.findById({ _id: id })
        if (available) {

            const deleteBooking = await artistBooking.deleteOne({ _id: id })
            if (deleteBooking) {
                return res.status(200).json({ message: `Successfully deleted booking by id: ${id}` })
            }
            else {
                const error = new Error(`No data found by id: ${id}`);
                error.status = 400;
                throw error;
            }
        }

        else {
            return res.status(400).json({ message: `No venue available by id ${id}` })
        }

    }
    catch (error) {
        return next(error)
    }
}

module.exports = deleteBooking