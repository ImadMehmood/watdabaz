const Venue = require("../../models/venue")

const updateVenue = async (req, res, next) => {
   const { id } = req.params
   try {
      const available = await Venue.findById({ _id: id })
      if (available){
         
         const updateVenue = await Venue.findByIdAndUpdate(id, req.body, { new: true })
         if (updateVenue) {
            return res.status(200).json({ messge: `succussfully updated Venue by id ${id}`, venue: updateVenue })
         }
         else {
            const error = new Error(`No data found by id: ${id}`);
            error.status = 400;
            throw error;
         }

      }
      else{
         return res.status(400).json({ message: `No venue available by id ${id}` })

      }

   }
   catch (error) {
      return next(error)

   }
}

module.exports = updateVenue