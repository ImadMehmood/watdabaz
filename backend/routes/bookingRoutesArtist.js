const express = require("express")
const registerEvent = require("../controllers/ArtistBooking/registerEvent")
const getEvents = require("../controllers/ArtistBooking/getAllEvents")
const updateEvents = require("../controllers/ArtistBooking/updateEvent")
const deleteBooking = require("../controllers/ArtistBooking/deleteEvent")
const router = express.Router()

router.post("/register" , registerEvent)
router.get("/get" , getEvents)
router.patch("/update/:id" ,updateEvents)
router.delete("/delete/:id" , deleteBooking )


module.exports = router