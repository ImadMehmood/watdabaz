const Artist = require("../../models/artist")

const deleteArtist = async (req, res, next) => {

    const { id } = req.params;

    try {

          const available = await Artist.findById({_id:id})
          if(available){
            const deleteArtist = await Artist.deleteOne({ _id: id })
            if (deleteArtist) {
                return res.status(200).json({ message: `Successfully deleted artist by id: ${id}` })
            }
            else {
                const error = new Error(`No data found by id: ${id}`);
                error.status = 400;
                throw error;
            }

          }
          else{
            return res.status(200).json({message:`No user available by id: ${id}`})
          }
        
      
    }

    catch (error) {
        return next(error)

    }
}

module.exports = deleteArtist;