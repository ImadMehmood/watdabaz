const Venue = require("../../models/venue");
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')


const venueLogin = async (req, res, next) => {

    const { email, password } = req.body

    try {

        const user = await Venue.findOne({Email:email })

       
        if (!user) {
            return res.status(404).json({ message: `Email not found ${email}` })
        }

        const match = await bcrypt.compare(password, user.Password);


        if (!match) {
            return res.status(404).json({ message: "Password not correct" })

        }

        else {
            const token = jwt.sign({_id: user._id}, user.Email)

            res.cookie('jwt', token, {
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000 // 1 day
            })
        
          


            return res.status(200).json( {message:"Signed In", user} )
        }

    }
    catch (error) {
        return next(error)
    }
}

module.exports = venueLogin