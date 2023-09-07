const venueBooking = require("../../models/venueBooking");
const Venue = require("../../models/venue");
const Artist = require("../../models/artist");

const registerEvent = async (req, res, next) => {
  let {
    venue,
    artist,
    Date,
    StartTime,
    EndTime,
    Region,
    Metrohub,
    City,
    Dancing,
    CoverCharge,
    DrinkMinimum,
    Reservation,
    AdvanceTicket,
  } = req.body;
  venue = venue.replace(/"/g, '');

  try {
    const artistcheck = await Artist.findOne({ ArtistName: artist });
    const venuecheck = await Venue.findOne({ VenueName: venue });
    
    if (!artistcheck || !venuecheck) {
      return res.status(404).json({ message: "Artist or venue not found." });
    }

    const overlappingEvents = await venueBooking.find({
      Date: Date,
      City: City,
      $or: [
        { StartTime: { $lt: EndTime, $gte: StartTime } },
        { EndTime: { $gt: StartTime, $lte: EndTime } },
      ],
    });

    if (overlappingEvents.length > 0) {
      return res.status(404).json({ message: "Event overlaps with existing bookings." });
    }

    const venueBooked = await venueBooking.create({
      venue: venuecheck._id,
      artist: artistcheck._id,
      Date,
      StartTime,
      EndTime,
      Region,
      Metrohub,
      City,
      Dancing,
      CoverCharge,
      DrinkMinimum,
      Reservation,
      AdvanceTicket,
    });

    await venueBooked.populate(['artist', 'venue']);

    if (venueBooked) {
      return res.status(200).json({
        message: "Successfully created new Booking",
        venueBooked,
      });
    } else {
      const error = new Error("Failed to create new Booking");
      error.status = 400;
      throw error;
    }
  } catch (error) {
    return next(error);
  }
};

module.exports = registerEvent;
