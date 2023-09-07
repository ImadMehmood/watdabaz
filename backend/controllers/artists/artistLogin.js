const Artist = require("../../models/artist");
const bcrypt = require("bcryptjs")

const artistLogin = async (req, res, next) => {

    const { email, password } = req.body

    try {

        const user = await Artist.findOne({Email:email })

       
        if (!user) {
            return res.status(404).json({ message: `Email not found ${email}` })
        }

        const match = await bcrypt.compare(password, user.Password);


        if (!match) {
            return res.status(404).json({ message: "Password not correct" })

        }

        else {
            return res.status(200).json( {message: "Signed In", user} )
        }

    }
    catch (error) {
        return next(error)
    }
}

module.exports = artistLogin