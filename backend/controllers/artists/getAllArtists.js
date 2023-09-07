const express = require("express");
const Artist = require("../../models/artist");

const getAllArtists = async (req, res) => {

    try {

        const artists = await Artist.find({});

        if (artists) {
            return res.status(200).json({ artists })
        }
        else {
            const error = new Error("No artists data found");
            error.status = 400;
            throw error;
        }

    }
    catch (error) {
        return next(error)
    }
}

module.exports = getAllArtists