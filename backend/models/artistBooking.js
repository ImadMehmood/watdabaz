const mongoose = require("mongoose")
const {Schema} = mongoose

const artistBooking = new Schema({

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
    City: {
        type: String,
        required: true
    },





})

module.exports = mongoose.model("ArtistBooking" , artistBooking, "artistsbooking")