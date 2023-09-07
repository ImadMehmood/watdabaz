const Artist = require("../../models/artist")

const updateArtist = async (req, res, next) => {
   const { id } = req.params
   try {

      const available = await Artist.findById({ _id: id })
      if (available) {

         const updateArtist = await Artist.findByIdAndUpdate(id, req.body, { new: true })
         if (updateArtist) {
            return res.status(200).json({ messge: `succussfully updated artist by id ${id}`, artist: updateArtist })
         }
         else {
            const error = new Error(`No data found by id: ${id}`);
            error.status = 400;
            throw error;
         }
      }
      else 
      {
         return res.status(400).json({ message: `No artist available by id ${id}`})
      }

   }
   catch (error) {
      return next(error)

   }
}

module.exports = updateArtist