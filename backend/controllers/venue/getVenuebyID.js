const Venue = require("../../models/venue")
const jwt = require("jsonwebtoken")

const getVenuebyID = async (req, res, next) => {
    const { id } = req.params
    const cookie = req.cookies['jwt']
    // console.log(cookie);
    try {
        const user = await Venue.findById({ _id: id })
        
        const claims = jwt.verify(cookie, user.Email)

        if (!claims) {
            return res.status(401).json({message:"unauthorizred user"})
        }

        if (user) {

            return res.status(200).json(user)
        }


        else {
            return res.status(400).json({ message: `No artist available by id ${id}` })
        }

    }
    catch (error) {
        return res.status(401).send({
            message: 'unauthenticated'
        })

    }
}

module.exports = getVenuebyID