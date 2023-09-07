const express = require("express")
const registerEvent = require("../controllers/VenueBooking/registerEvent")
const getEvents = require("../controllers/VenueBooking/getAllEvents")
const updateEvents = require("../controllers/VenueBooking/updateEvent")
const deleteBooking = require("../controllers/VenueBooking/deleteEvent")
const getEventbyVenueID = require("../controllers/VenueBooking/getEventbyId")
const router = express.Router()

router.post("/register" , registerEvent)
router.get("/get" , getEvents)
router.delete("/delete/:id" , deleteBooking)
router.patch("/update/:id", updateEvents)
router.post("/venue/:id", getEventbyVenueID)


module.exports = router