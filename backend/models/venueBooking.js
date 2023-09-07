const mongoose = require("mongoose")
const { Schema } = mongoose

const venueBooking = new Schema({

    venue: {
        type: Schema.Types.ObjectId,
        ref: 'Venue',
        required: true
    },

    artist: {
        type: Schema.Types.ObjectId,
        ref: 'Artist',
        required: true
    },

    
    Date: {
        type: Date,
        required: true
    },

    StartTime: {
        type: Number,
        required: true
    },
    EndTime: {
        type: Number,
        required: true
    },
    Region: {
        type: String,
        required: true
    },

    Metrohub:{
        type: String,
        required:true
    },
    
    City: {
        type: String,
        required: true
    },
    Dancing: {
        type: String,
        required: false,
    },
    CoverCharge: {
        type: String,
        required: false,
    },
    DrinkMinimum: {
        type: String,
        required: false,
    },
    Reservation: {
        type: String,
        required: true,
    },
    AdvanceTicket: {
        type: String,
        required: true,
    },

})

module.exports = mongoose.model("VenueBooking", venueBooking, "venuebookings")