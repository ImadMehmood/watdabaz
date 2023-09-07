const express = require("express")
const router = express.Router()
const registerArtist = require("../controllers/artists/registerArtist");
const getAllArtists = require("../controllers/artists/getAllArtists");
const deleteArtist = require("../controllers/artists/deleteByID");
const updateArtist = require("../controllers/artists/updatebyID");
const artistLogin = require("../controllers/artists/artistLogin");
const getArtistbyID = require("../controllers/artists/getArtistbyID");

router.post("/register" , registerArtist )
router.get("/get" , getAllArtists )
router.delete("/delete/:id" , deleteArtist)
router.patch("/update/:id" ,updateArtist )
router.post("/login",artistLogin)
router.post("/:id",getArtistbyID)

module.exports = router;