const ArtistBooking = require("../../models/artistBooking")
const Venue = require("../../models/venue")
const Artist = require("../../models/artist")

const registerEvent = async (req, res, next) => {

    const { venue, artist, Date, StartTime, EndTime, City } = req.body
    try {
        const artistcheck = await Artist.findOne({ArtistName:artist});
        const venuecheck = await Venue.findOne({VenueName:venue});
        if (!artistcheck || !venuecheck) {
            return res.status(404).json({artistcheck, venuecheck});
        }

        if (artistcheck && venuecheck) {



            const artistBooked = await ArtistBooking.create({
                venue: venuecheck._id,
                artist: artistcheck._id,
                Date,
                StartTime,
                EndTime,
                City
            })
            await artistBooked.populate(['artist', 'venue']);


            if (artistBooked) {
                // const populatedArtist = artistBooked.artist;
                // const populatedVenue = artistBooked.venue;

                return res.status(200).json({
                    message: "Successfully created new Booking",
                    artistBooked
                });
            }
            else {
                const error = new Error("Failed to create new Booking");
                error.status = 400;
                throw error;
            }


        }





    }
    catch (error) {
        return next(error)
    }
}

module.exports = registerEvent