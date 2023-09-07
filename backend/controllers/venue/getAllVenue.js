const express = require("express");
const Venue = require("../../models/venue");

const getAllvenue = async (req, res , next) => {

    try {

        const venues = await Venue.find({});

        if (venues) {
            return res.status(200).json({ venues })
        }
        else {
            const error = new Error("No venue data found");
            error.status = 400;
            throw error;
        }

    }
    catch (error) {
        return next(error)
    }
}

module.exports = getAllvenue