const Venue = require("../../models/venue")

const deleteVenue = async (req, res, next) => {

    const { id } = req.params;

    try {
        const available = await Venue.findById({_id:id})
        if(available){
            const deleteVenue = await Venue.deleteOne({ _id: id })
            if (deleteVenue) {
                return res.status(200).json({ message: `Successfully deleted venue by id: ${id}` })
            }
            else {
                const error = new Error(`No data found by id: ${id}`);
                error.status = 400;
                throw error;
            }

        }
        else{
            return res.status(400).json({message:`No venue available by id ${id}`})
        }

       
    }

    catch (error) {
        return next(error)

    }
}

module.exports = deleteVenue;