const mongoose = require("mongoose")
const { Schema } = mongoose;

const artistSchema = new Schema({
    ArtistName: {
        type: String,
        required: true
    },

    Email: {
        type: String,
        required: true
    },
    
    Password:{
        type:String,
        required:true
    },
    Region: {
        type: String,
        required: true,
    },

    Metrohub: {
        type: String,
        required: true
    },
    Genre: {
        type: String,
        required: false
    },
    WebsiteLink: {
        type: String,
        required: false
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

    WhatDaBuzzName: {
        type: String,
        required: true,
    },
    WhatDaBuzzNumber: {
        type: Number,
        required: true,
    },

    WhatDaBuzzNameLive: {
        type: String,
        required: false,
    },

    WhatDaBuzzNumberLive: {
        type: Number,
        required: false,
    },

    Image:{
        type:String,
        required:false,
    },

    Role:{
        type: String,
        default:"artist"
    }



})

module.exports = mongoose.model("Artist", artistSchema, "artists")