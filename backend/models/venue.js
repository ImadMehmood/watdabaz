const mongoose = require("mongoose");
const { Schema } = mongoose;

const venueSchema = new Schema({
    VenueName: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    PhoneNumber: {
        type: Number,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Street: {
        type: String,
        required: false
    },
    Region: {
        type: String,
        required: true,
       
    },
    Metrohub: {
        type: String,
        required: true
    },
    City: {
        type: String,
        required: true
    },
    Genre: {
        type: String,
        required: false
    },
    Dancing: {
        type: String,
        enum: ["yes", "no"],
        required: false,
    },
    CoverCharge: {
        type: String,
        enum: ["yes", "no"],
        required: false,
    },
    LGBTQ: {
        type: String,
        enum: ["yes", "no"],
        required: false,
    },
    TemporaryClosed: {
        type: String,
        required: false,
    },
    Direction: {
        type: String,
        required: false,
    },
    FacebookLink: {
        type: String,
        required: false,
    },
    OtherSocialMediaLink1: {
        type: String,
        required: false,
    },
    OtherSocialMediaLink2: {
        type: String,
        required: false,
    },
    About: {
        type: String,
        required: false,
    },
    WhatDaBuzzName: {
        type: String,
        required: true,
    },
    WhatDaBuzzNumber: {
        type: Number,
        required: true,
    },

    Image:{
        type:String,
        required:false,
    },

    Role:{
        type: String,
        default: "venue"
    }
});

module.exports = mongoose.model("Venue", venueSchema, "venues");
