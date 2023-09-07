const Artist = require("../../models/artist")

const getArtistbyID = async (req, res, next) => {
    const { id } = req.params
    try {

        const user = await Artist.findById({ _id: id })
        if (user) {

            return res.status(200).json(user)
        }


        else {
            return res.status(400).json({ message: `No artist available by id ${id}` })
        }

    }
    catch (error) {
        return next(error)

    }
}

module.exports = getArtistbyID