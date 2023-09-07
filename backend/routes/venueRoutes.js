const express = require("express")
const router = express.Router();
const registerVenue = require("../controllers/venue/registerVenue");
const getAllvenue = require("../controllers/venue/getAllVenue");
const deleteVenue = require("../controllers/venue/deleteByID");
const updateVenue = require("../controllers/venue/updatebyID");
const venueLogin = require("../controllers/venue/venueLogin");
const getVenuebyID = require("../controllers/venue/getVenuebyID");
const logoutvenue = require("../controllers/venue/logoutvenue");
// const upload = require('../middlewares/multerConfig')

router.post("/register" , registerVenue)
router.get("/get" , getAllvenue)
router.delete("/delete/:id" , deleteVenue)
router.patch("/update/:id" , updateVenue)
router.post("/login",venueLogin)
router.post("/logout" , logoutvenue)
router.post("/:id" , getVenuebyID)




module.exports = router;